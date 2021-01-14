import React from "react";
import { Card, CardBody, CardTitle, CardText,CardImg, Col } from "reactstrap";

function TreeCard(props) {
  return (
      props.products.map((obj) => {
        // <div className="TreeCard col-md-4 col-lg-4 col-sm-4 col-xs-12" key={obj.id}> 
        return (
          <Col lg={4} xl={3} md={4} sm={12} xs={12} key={obj.id}>
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
          </Col>
        );
      })
  );
}

export default TreeCard;
