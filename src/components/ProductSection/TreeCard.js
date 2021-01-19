import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./TreeCard.css";
import CollapseDescription from "./CollapseDiscription";
import Collapse from "react-bootstrap/Collapse";
import { ProductContext } from "../../ProductContext";

function TreeCard(props) {
  const [open, setOpen] = useState(false);
  const {tree, getTree} = useContext(ProductContext)
  const add = props.add
  const collapse = (card) => {
  }

useEffect(() => {
    getTree()
  }, [])

  const ListTrees = (props) => {
    if(tree) {
     return tree.map((obj) => {
    return (
      <>
        <Col md={4} xs={12} key={obj.id}>
          <Card className="TreeCard">
            <Card.Img
              variant="top"
              src={obj.tree_img}
              id="pic"
              alt="tree"
              onClick={() => setOpen(!open)}
              aria-controls="tree-description"
              aria-expanded={open}
            />
            <div className="shadow"></div>
            <Card.Body>
              <Card.Title> {obj.tree_name}</Card.Title>
              <Card.Text>
                <p>
                  CO<sub>2</sub>: -{obj.co2}kg
                </p>
                <h3>{obj.price} $</h3>
                <h3>{obj.country} $</h3>
              </Card.Text>

              <Button
                className="ButtonAdd"
                id={obj.id}
                onClick={() => props.add(obj)}
              >
                Add
              </Button>

              <CollapseDescription />
            </Card.Body>

            <Collapse in={open}>
              <div id="tree-description">
                Tree picture and Tree description goes here!
              </div>
            </Collapse>
          </Card>
        </Col>
      </>
    );
  });
    } else {
      return <></>
    }
  }

  return (
    <ListTrees add={add}/>
  )
}

export default TreeCard;
