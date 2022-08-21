import { Fragment, useState, useEffect } from "react";
import { buildGraph } from './utils/build-graph-local.js';
import PrereqTree from "./components/PrereqTree";
import BasicSelect from './components/BasicSelect.jsx';
import Table from './components/Table.jsx';
import "./index.css";
import useDepts from "./custom-hooks/useDepts.js";

function App() {
  /* Hooks for choosing a department */
  const [letter, setLetter] = useState('A');
  const { departments, colNamesForDepts } = useDepts(letter);

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
  /* RENDER PRE-REQUISITE TREE WHEN ROOT COURSE HAS BEEN SET */
  //  <div className="container">
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

    <Fragment>
      <h1> {letter}</h1>
      <BasicSelect firstLetter={letter} changeLetter={letter => setLetter(letter)}/>
      <Table 
        list={departments} 
        colNames={colNamesForDepts} 
        typeOfId={'dept_id'}/>
    </Fragment>
  );
}

export default App;