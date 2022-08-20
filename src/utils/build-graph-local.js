import parseCourseRelationships from './parse-course-rels.js';

// Graphs are made of nodes and edges, all helper methods in this file can access it.
let nodes = [];
let edges = [];

// instantiate sets to prevent any duplicate nodes or edges
let registeredNodes = new Set();
let registeredEdges = new Set();

/**
 *
 * @param {string} rootCourse 
 * @returns list of nodes and edges
 */
export async function buildGraph(rootCourse) {
    /**
     * Get the department of rootCourse
     * Examples:
     * 
     * 'BMGT313F' -> 'BMGT'
     * 'JOUR175' -> 'JOUR'
     */
    // const department = rootCourse.slice(0, 4);

    /**
     * build the url 
     * 
     * For local development, we will use mock data using json-server library.
     * 
     * Command to start server: 'json-server --watch data/cmscCourses.json -p 8000'
     * Url will be opened to http://127.0.0.1:8000/courses
     */
    const url = 'http://127.0.0.1:8000/courses';

    // build course prereq map
    const coursePrereqMap = await buildCoursePrereqMap(url);

    function dfs(prev, curr) {
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
        const res = await fetch(url);
        const coursesInDepartment = await res.json();
        courses.push(...coursesInDepartment);
    } catch (error) {
        console.log('could not fetch data');
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