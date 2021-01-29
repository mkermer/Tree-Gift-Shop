import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import "./TreeCard.css";
import CollapseDescription from "./CollapseDiscription";
import { ProductContext } from "../../ProductContext";
import { LoginContext } from "../../LoginContext";
import { CartContext } from "../../CartContext";

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});


function TreeCard(props) {
  const [open] = useState(false);

  const { tree } = useContext(ProductContext);
  const { getEmail } = useContext(LoginContext);
  const { openSidebar, setBounce } = useContext(CartContext);
  const add = props.add;

  const ListTrees = (props) => {
    if (tree) {
      return tree.map((obj) => {
        return (
          <Col 
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="600"
          lg={4} md={6} sm={12} xs={12} key={obj.tree_name}>
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
                  <img className="opacity" src={obj.background_img} alt={obj.tree_name} />
                </div>
                <Card.Title>
                  {" "}
                  <h2>{obj.tree_name}</h2>
                </Card.Title>
                <Card.Text>
                  CO<sub>2</sub>: -{obj.co2}kg <br />
                  {obj.country}
                </Card.Text>
                <h2>{obj.price} $</h2>
                <Button
                  className="ButtonAdd"
                  id={obj.id}
                  onClick={() => {
                    if (!getEmail()) {
                      alert("You have to login to add items to cart.");
                    } else {
                      props.add(obj);
                      openSidebar();
                      setBounce(1)
                    }
                  }}
                >
                  Add
                </Button>

                <CollapseDescription tree={obj.tree_description} />
              </Card.Body>
            </Card>
          </Col>
        );
      });

    } else {
      return null;
    }
  };

  return <Row><ListTrees add={add} /></Row>;
}
export default TreeCard;
