import { Canvas, Node } from "reaflow";

const PrereqTree = ({ nodes, edges }) => {
    return (
      <Canvas
        fit={true}
        maxWidth={800}
        maxHeight={800}
        nodes={nodes}
        edges={edges}
        direction={'UP'}
        node={(node) => (
          <Node
            {...node}
            dragCursor="grab"
            dragType="all"
            // onEnter={(event, node) => console.log(node)}
          />
        )}
      />
    );
}
 
export default PrereqTree;