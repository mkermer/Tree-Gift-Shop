import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./TreeCard.css";
import CollapseDescription from "./CollapseDiscription";
import { ProductContext } from "../../ProductContext";
import { CartContext } from "../../CartContext";

function TreeCard(props) {
  const [open, setOpen] = useState(false);
  const {tree, getTree,products} = useContext(ProductContext)
  const {openSidebar} = useContext(CartContext)
  const add = props.add

  const ListTrees = (props) => {
    if(tree) {
     return tree.map((obj) => {
    return (
      <>
        <Col md={4} xs={12} key={obj.id}>
          <Card className="TreeCard">
            <div>
              <img className="opacity" src={obj.background_img}/>
            <Card.Img
              variant="top"
              src={obj.tree_img}
              id="pic"
              alt="tree"
              onClick={() => setOpen(!open)}
              aria-controls="tree-description"
              aria-expanded={open}
              // style={{  
              //   backgroundImage: "url(" + obj.background_img + ")"
              //   // backgroundColor: "rgba(" + "0, 255, 255, 0.2" +")"
              // }}
            />
            </div>
            <div className="shadow"></div>
            <Card.Body>
              <Card.Title> {obj.tree_name}</Card.Title>
              <Card.Text>
                <h3>
                  CO<sub>2</sub>: -{obj.co2}kg
                </h3>
                <h2>{obj.price} $</h2>
                <h2>{obj.country}</h2>
              </Card.Text>

              <Button
                className="ButtonAdd"
                id={obj.id}
                onClick={() => {props.add(obj); openSidebar()}}
              >
                Add
              </Button>

              <CollapseDescription tree={obj.tree_description} />
            </Card.Body>
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
