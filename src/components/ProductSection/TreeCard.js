import React, { useState } from "react";
<<<<<<< HEAD
import Button from "react-bootstrap/Button";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";
=======
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
>>>>>>> 3d19a99ea86bdb2a7cd0718bc406a65c8321f1ad
import "./TreeCard.css";
import CollapseDescription from "./CollapseDiscription";
import Collapse from "react-bootstrap/Collapse";

function TreeCard(props) {
  const [open, setOpen] = useState(false);
  
  return (
      props.products.map((obj) => {
        return (
          <>

         <Col md={4} xs={12} key={obj.id}>
            <Card className="TreeCard" >   
                <Card.Img 
                variant="top"
                src={obj.img} 
                id="pic" 
                alt="tree" 
                onClick={() => setOpen(!open)}
                aria-controls="tree-description"
                aria-expanded={open}
                />
                <div className="shadow">
                  
                </div>
                <Card.Body> 
                
<<<<<<< HEAD
                <CardTitle> {obj.name}</CardTitle>
                <CardText>
=======
                <Card.Title> {obj.name}</Card.Title>

                <Card.Text>
>>>>>>> 3d19a99ea86bdb2a7cd0718bc406a65c8321f1ad
                  <p>
                    CO<sub>2</sub>: -{obj.co2}kg
                  </p>
                  <h3>{obj.price} $</h3>
                </Card.Text>

                <Button 
                  className="ButtonAdd" 
                  id={obj.id} 
                  onClick={() => props.add(obj)}>
                  {" "}
                  Add{" "}
                </Button>

                <CollapseDescription/>

              </Card.Body>

              <Collapse in={open}>
                <div id="tree-description">
                  Tree picture and Tree description goes here!
                </div>
              </Collapse>

            </Card>
<<<<<<< HEAD
          </Col>
=======

          </Col>
          </>
            
          
>>>>>>> 3d19a99ea86bdb2a7cd0718bc406a65c8321f1ad
        )
      })
  );
}
<<<<<<< HEAD
export default TreeCard;
=======

<<<<<<< HEAD
>>>>>>> 3d19a99ea86bdb2a7cd0718bc406a65c8321f1ad
=======
export default TreeCard;

>>>>>>> 034da03eff1c5777f0809c5730578369bcb96b9b
