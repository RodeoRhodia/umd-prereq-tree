import { useState, useEffect } from "react";
import { buildGraph } from './utils/build-graph.js';
import PrereqTree from "./components/PrereqTree";
import BasicSelect from './components/BasicSelect.jsx';
import Table from './components/Table.jsx';
import "./index.css";
import "./App.css";
import useDepts from "./hooks/useDepts.js";
import useCourses from "./hooks/useCourses.js";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

function App() {
  /* Hooks for choosing a department */
  const [letter, setLetter] = useState('A');
  const { departments, colNamesForDepts, deptId } = useDepts(letter);
  const [deptSelected, setDeptSelected] = useState(false);
  const [deptConfirmed, setDeptConfirmed] = useState(false);

  /* Hooks for choosing a course */
  const [isPending, setIsPending] = useState(true);
  const { courses, setCourses, colNamesForCourses, courseId } = useCourses(deptSelected, deptConfirmed, setIsPending);
  const [courseSelected, setCourseSelected] = useState(null);
  const [courseConfirmed, setCourseConfirmed] = useState(false);
  
  /* Component for Pre-requisite Tree */
  const [nodes, setNodes] = useState(null);
  const [edges, setEdges] = useState(null);
  const [isGraphBuilt, setIsGraphBuilt] = useState(false);

  useEffect(() => {
    async function fetchGraph() {
      try {
        let [nodesList, edgesList] = await buildGraph(courseSelected, deptSelected);
        setNodes(nodesList);
        setEdges(edgesList);
        setIsGraphBuilt(true);
      } catch (error) {
        console.log('error occurred');
        console.log(error);
      }
    }

    if (courseConfirmed) {
      fetchGraph();
    }
  }, [courseConfirmed]);

  return (
    /* MENU TO SELECT A DEPARTMENT */
      <div className="App-Container">
        {!deptConfirmed &&
          <div id="department-menu">
              <h2>Department Selected: {deptSelected}</h2>
              <BasicSelect
                  firstLetter={letter}
                  changeLetter={letter => setLetter(letter)}
              />
              <Table
                list={departments}
                colNames={colNamesForDepts}
                typeOfId={deptId}
                changeValueSelected={deptSelected => setDeptSelected(deptSelected)}
              />
              <Button
                variant="contained"
                disabled={deptSelected ? false : true}
                onClick={async () => setDeptConfirmed(true)}>
                Continue 
              </Button>
          </div>
        }

        {/* LOADING TO RENDER COURSES MENU */}
        {isPending && deptConfirmed && 
          <div id="loadingcircle" style={{padding: '300px'}}>
            <CircularProgress />
          </div>
        }
    
        {/* MENU TO SELECT A COURSE */}
        {courses && !courseConfirmed &&
          <div id="course-menu">
            <h2>Course Selected: {courseSelected}</h2>
            <Table
              list={courses}
              colNames={colNamesForCourses}
              typeOfId={courseId}
              changeValueSelected={courseSelected => {
                setCourseSelected(courseSelected);
              }}
            />
            <Button
              variant="contained"
              style={{marginRight: '10px'}}
              onClick={() => {
                setCourses(null);
                setDeptConfirmed(false);
                setCourseConfirmed(false);
                setCourseSelected(false);
                setDeptSelected(null);
                setIsPending(true);
            }}>Back to departments</Button>

            <Button
              variant="contained"
              color={"success"}
              disabled={courseSelected ? false : true}
              onClick={async () => {
                setCourseConfirmed(true);
              }}>Build Prereq Tree </Button>
          </div>
        }

        {/* RENDER PRE-REQUISITE TREE WHEN ROOT COURSE HAS BEEN SET */}
        {deptConfirmed && courseConfirmed &&
          <div className="tree-container">
          <h2>{ courseSelected }'s Prereq Tree</h2>
          <Button
              variant="contained"
              style={{marginRight: '10px'}}
              onClick={() => {
                setCourseConfirmed(false);
                setNodes(null);
                setEdges(null);
                setIsGraphBuilt(false);
                setCourseSelected(null);
            }}>Back to courses</Button>
          { isGraphBuilt && <PrereqTree nodes={nodes} edges={edges}/> }
          </div>
        }
      </div>
  );
}

export default App;