import React, { useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./TreeCard.css";
import CollapseDescription from "./CollapseDiscription";
import { ProductContext } from "../../ProductContext";
import { LoginContext } from "../../LoginContext";
import { CartContext } from "../../CartContext";


function TreeCard(props) {
  const [open] = useState(false);
  const {tree} = useContext(ProductContext)
  const {getEmail} = useContext(LoginContext)
  const {openSidebar, bounce, setBounce} = useContext(CartContext)
  const add = props.add

  console.log(bounce)

  const ListTrees = (props) => {
    if(tree) {
     return tree.map((obj) => {
    return (
      <>

        <Col lg={4} md={6} sm ={12} xs={12} key={obj.tree_name}>
          <Card className="TreeCard">

            <Card.Img
              variant="top"
              src={obj.tree_img}
              id="pic"
              alt="tree"
              aria-controls="tree-description"
              aria-expanded={open}
            />
            <div className="Treeshadow"></div>
            
            
            <Card.Body>
              <div className="CardImages">
              <img className="opacity" src={obj.background_img}/>
              </div>
              <Card.Title> <h2>{obj.tree_name}</h2></Card.Title>
              <Card.Text>
                CO<sub>2</sub>: -{obj.co2}kg <br/>
                {obj.country}
              </Card.Text>
              <h2>{obj.price} $</h2>
              <Button
                className="ButtonAdd"
                id={obj.id}
                onClick={() => {
                  setBounce(1);
                  if(!getEmail()){
                    alert('You have to login to add items to cart.')
                  } else {
                  props.add(obj)
                  openSidebar()}}}
                onAnimationEnd={() => setBounce(0)}
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
  );
}
export default TreeCard;
