<<<<<<< HEAD
import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";
import "./TreeCard.css";
=======
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";
import "./TreeCard.css";
import CollapseDescription from './CollapseDiscription';
import Collapse from 'react-bootstrap/Collapse';

>>>>>>> 0a052e4fdfbf7dd0a76898867306cd3c47286be3
function TreeCard(props) {
  const [open, setOpen] = useState(false);
  return (
      props.products.map((obj) => {
        return (
          <Col lg={4} xl={3} md={4} sm={12} xs={12} key={obj.id}>
            <Card>
              <CardBody>        
                <CardImg 
                src={obj.img} 
                id="pic" 
                alt="tree" 
                onClick={() => setOpen(!open)}
                aria-controls="tree-description"
                aria-expanded={open}
                />
                
                <CardTitle> {obj.name}</CardTitle>
                <CardText>
                  <p>
                    CO<sub>2</sub>: -{obj.co2}kg
                  </p>
                  <h3>{obj.price} $</h3>
                </CardText>
                <Button className="ButtonAdd" id={obj.id} onClick={() => props.add(obj)}>
                  {" "}
                  Add{" "}
                </Button>
                <CollapseDescription/>
              </CardBody>
              <Collapse in={open}>
                <div id="tree-description">
                  Tree picture and Tree description goes here!
                </div>
              </Collapse>
            </Card>
          </Col>
<<<<<<< HEAD
=======
            
          
>>>>>>> 0a052e4fdfbf7dd0a76898867306cd3c47286be3
        )
      })
  );
}
<<<<<<< HEAD
export default TreeCard;
=======

//                 <CardText>
//                   <p>
//                     CO<sub>2</sub>: -{obj.co2}kg
//                   </p>
//                   <h3>{obj.price} $</h3>
//                 </CardText>
//                 <button id={obj.id} onClick={() => props.add(obj)}>
//                   {" "}
//                   Add{" "}
//                 </button>
//               </CardBody>
//             </Card>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default TreeCard;
>>>>>>> 5c3096143157e1a3edf2b70d8e1d62e82ef2719c
