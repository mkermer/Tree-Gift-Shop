import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BuyTree from '../../illustrations/undraw_walking_outside_without human.svg';
// import CreditCard from '../../illustrations/undraw_Credit_card_re_blml.svg';
// import SentGift from '../../illustrations/undraw_send_gift_7o4m.svg';

import {
  Card, CardBody, CardTitle, CardText, CardImg,
} from 'reactstrap';

// import './ProductSection.css';

function HowToBuy() {
  return (
    <div>
      <Container className="HowToBuy">
        <Row>
          <Col md={12}>
            <h2>How to become a farmer?</h2>
          </Col>
          <Col lg={3} md={12}>
            <Card className="HowToBuyCard">
              <CardBody>
                <CardImg src="#picture" id="picHowTo1" alt="country" />
                <CardTitle tag="h5">Select the country</CardTitle>
                <CardText>Select the country and the Tree you want to plant</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={12}>
            <Card className="HowToBuyCard">
              <CardBody>
                <CardImg src="#picture" id="picHowTo2" alt="Contact" />
                <CardTitle tag="h5">Fill in the Contact Form</CardTitle>
                <CardText>Leave us your contact data and one of our team members will contact you soon</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={12}>
            <Card className="HowToBuyCard">
              <CardBody>
                <CardImg src="#picture" id="picHowTo4" alt="Plant" />
                <CardTitle tag="h5">Plant the Tree</CardTitle>
                <CardText>After confirmation buy and plant the tree and send us the receipt or collect it from one of our centers </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={12}>
            <Card className="HowToBuyCard">
              <CardBody>
                <CardImg src="#picture" id="picHowTo4" alt="Discount" />
                <CardTitle tag="h5">Collect your Gift</CardTitle>
                <CardText>Send us a Picture from your newly planted Tree and recieve a 10$ Gift Card </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <div id="contact" />
    </div>
  );
}

export default HowToBuy;
