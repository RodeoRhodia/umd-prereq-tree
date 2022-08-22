import parseCourseRelationships from './parse-course-rels.js';

// Graphs are made of nodes and edges, all helper methods in this file can access it.
let nodes = [];
let edges = [];

// instantiate sets to prevent any duplicate nodes or edges
let registeredNodes = new Set();
let registeredEdges = new Set();


export async function buildGraph(rootCourse, department) {
    /**
     * build the url 
     */
    const url = `https://api.umd.io/v1/courses?dept_id=${department}&per_page=100&page=`;

    // build course prereq map
    const coursePrereqMap = await buildCoursePrereqMap(url);
    
    function dfs(prev, curr) {
        // stop recursion if node has been visited before
        if (registeredNodes.has(curr)) {
            return;
        }

        if (curr) {
            buildNode(curr);
        }
        
        if (prev) {
            buildEdge(curr, prev);
        }

        let relationships = coursePrereqMap.get(curr);
        if (!relationships) {
            return;
        }

        // search mustTake path
        for (let prereq of relationships.mustTake) {
            // 'curr' passed in first param of dfs because that's where the next recursion call
            // previously came from.
            dfs(curr, prereq);
        }

        // search pickOneFromEach
        for (let prereqCluster of relationships.pickOneFromEach) {
            let nodeId = prereqCluster.join('or');
            buildNode(nodeId);
            buildEdge(nodeId, curr);
        }

        // search pickTwoFromEach
        let pickTwoPrereqs = relationships.pickTwoFromEach;
        if (pickTwoPrereqs.length > 0) {
            let nodeId = pickTwoPrereqs.join('two');
            buildNode(nodeId);
            buildEdge(nodeId, curr);    
        }
    }

    dfs(null, rootCourse); // pass first param as null because rootCourse has no parent node.

    return [nodes, edges];
}

async function buildCoursePrereqMap(url) { // department param will not used for local development
    let courses = [];
    let coursePrereqMap = new Map();

    try {
        let res;
        let coursesInDepartment;

        for (let page = 1; page <= 2; page++) {
            res = await fetch(url + page);
            coursesInDepartment = await res.json();
            courses.push(...coursesInDepartment);
        }
    } catch (error) {
        console.log(error);
    }

    courses.forEach(course => {
        let prereqsObject = null;
        const strOfPrereqs = course.relationships.prereqs;

        if (strOfPrereqs) {
            prereqsObject = parseCourseRelationships(strOfPrereqs);
        }

        // add course and its prerequisites to a map, for fast lookup
        coursePrereqMap.set(course.course_id, prereqsObject);       
    });

    return coursePrereqMap;
}

function buildNode(courseId) {
    if (!registeredNodes.has(courseId)) {
        let node = {
            id: courseId,
            text: courseId
        };

        nodes.push(node);
        registeredNodes.add(courseId);
    }
}

function buildEdge(prereq, course) {
    let edgeId = `${prereq}-${course}`; 

    if (!registeredEdges.has(edgeId)) {
        let edge = {
            id: edgeId,
            from: prereq,
            to: course
        }

        edges.push(edge);
        registeredEdges.add(edgeId);
    }
}