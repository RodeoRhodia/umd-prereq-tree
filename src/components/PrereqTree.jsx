import { Canvas, Node } from "reaflow";

const PrereqTree = ({ nodes, edges }) => {
    return (
      <Canvas
        fit={true}
        maxWidth={600}
        maxHeight={800}
        nodes={nodes}
        edges={edges}
        direction={'UP'}
        node={(node) => (
          <Node
            {...node}
            dragCursor="grab"
            dragType="all"
            onClick={(event, node) => {
              let textOfClickedNode = node.text;

              async function displayMoreDetails() {
                try {
                  let url = `https://api.umd.io/v1/courses/${textOfClickedNode}`;

                  let res = await fetch(url);
                  let courseDetails = await res.json();
                  let message = `
                    Course Id: ${textOfClickedNode}, 
                    Course: ${courseDetails[0].name}, 
                    Department: ${courseDetails[0].department},
                    Description: ${courseDetails[0].description.slice(0, 50)}...`;
                  
                  window.alert(message);
                } catch (error) {
                  console.log('could not get more details');
                }
              }

              if (textOfClickedNode.slice(0, 2) !== 'P1' && textOfClickedNode.slice(0, 2) !== 'P2') {
                displayMoreDetails();
              } else {
                window.alert('Cannot get details at this moment');
              }
            
            }}
          />
        )}
      />
    );
}
 
export default PrereqTree;