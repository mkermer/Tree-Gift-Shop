import React from "react";
import { Card, CardBody, CardTitle, CardText,CardImg } from "reactstrap";
import './TreeCard.css'

function TreeCard(props) {
  return (
    <div>
      {props.products.map((obj) => {
        return (

          <div key={obj.id}> 
          <Card> 
          <CardBody> 
              <CardImg src={obj.img} id="pic" alt="tree"/>
              <CardTitle> {obj.name}</CardTitle>
            
              <CardText>
                <p>
                  CO<sub>2</sub>: -{obj.co2}kg
                </p>
                <h3>{obj.price} $</h3>
                </CardText>
              <button id={obj.id} onClick={props.add}> Add </button>
            </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default TreeCard;
