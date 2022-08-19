import { Canvas } from "reaflow";

const PrereqTree = ({ nodes, edges }) => {
    return (
        <Canvas
        fit={true}
        maxWidth={window.innerWidth}
        maxHeight={window.innerHeight}
        nodes={nodes}
        edges={edges}
      />
    );
}
 
export default PrereqTree;