import { useState } from "react";
import { buildGraph } from './utils/build-graph-local.js';
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
  const { courses, colNamesForCourses, courseId } = useCourses(deptSelected, deptConfirmed, setIsPending);
  const [courseSelected, setCourseSelected] = useState(false);
  const [courseConfirmed, setCourseConfirmed] = useState(false);
  
  /* Component for Pre-requisite Tree */
  // const [rootCourse, setRootCourse] = useState(null);
  // const [nodes, setNodes] = useState(null);
  // const [edges, setEdges] = useState(null);
  // const [isGraphBuilt, setIsGraphBuilt] = useState(false);

  // useEffect(() => {
  //   async function fetchGraph() {
  //     try {
  //       let [nodesList, edgesList] = await buildGraph(rootCourse);
  //       setNodes(nodesList);
  //       setEdges(edgesList);
  //       setIsGraphBuilt(true);
  //     } catch (error) {
  //       console.log('error occurred');
  //       console.log(error);
  //     }
  //   }

  //   if (rootCourse) {
  //     fetchGraph();
  //   }
  // }, [rootCourse]);

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
          <CircularProgress />
        }
    
        {/* MENU TO SELECT A COURSE */}
        {courses &&
          <div id="course-menu">
            <h2>Course Selected: {courseSelected}</h2>
            <Table
              list={courses}
              colNames={colNamesForCourses}
              typeOfId={courseId}
              changeValueSelected={courseSelected => {
                setCourseSelected(courseSelected);
                console.log(courseSelected);
              }}
            />
            <Button
              variant="contained"
              disabled={courseSelected ? false : true}
              onClick={async () => {
                setCourseConfirmed(true);
                console.log(courseSelected);
              }           
            }>
            Build Prereq Tree 
          </Button>
          </div>
        }

        {deptConfirmed && courseConfirmed &&
          <h1> prereq tree for { courseSelected } !</h1>
        }

      </div>

        /* RENDER PRE-REQUISITE TREE WHEN ROOT COURSE HAS BEEN SET */
  //  <div className="tree-container">
  //    <input 
  //      type="button"
  //      value="Set Root Course"
  //      onClick={() => {
  //        console.log('BUTTON CLICKED');
  //        setRootCourse('CMSC451');
  //    }} />
  //  { rootCourse && <h2> Prereq Tree for: { rootCourse } </h2>}
  //  { isGraphBuilt && <PrereqTree nodes={nodes} edges={edges}/> }
  //  </div>
  );
}

export default App;