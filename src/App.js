import { useState, useEffect } from "react";
import PrereqTree from "./components/PrereqTree";
import { buildGraph } from './utils/build-graph-local.js';

function App() {
  /* Component for Pre-requisite Tree */
  const [rootCourse, setRootCourse] = useState(null);
  const [nodes, setNodes] = useState(null);
  const [edges, setEdges] = useState(null);
  const [isGraphBuilt, setIsGraphBuilt] = useState(false);

  useEffect(() => {
    async function fetchGraph() {
      try {
        let [nodesList, edgesList] = await buildGraph(rootCourse);
        setNodes(nodesList);
        setEdges(edgesList);
        setIsGraphBuilt(true);
      } catch (error) {
        console.log('error occurred');
        console.log(error);
      }
    }

    if (rootCourse) {
      fetchGraph();
    }
  }, [rootCourse]);


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

    <div>
      <h1>Testing</h1>
    </div>
  );
}

export default App;