import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TreeCard.css";
import CollapseDescription from "./CollapseDiscription";
import Collapse from "react-bootstrap/Collapse";

function TreeCard(props) {
  const [open, setOpen] = useState(false);
  
  return (
      props.products.map((obj) => {
        return (
          <>

         {/* <Col > */}
            {/* lg={4} xl={3} md={4} sm={12} xs={12} */}
            <Card className="TreeCard" key={obj.id}>   
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
                
                <Card.Title> {obj.name}</Card.Title>

                <Card.Text>
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

          {/* </Col> */}
          </>
            
          
        )
      })
  );
}

