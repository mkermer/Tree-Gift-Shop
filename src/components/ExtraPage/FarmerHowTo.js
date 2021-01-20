import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BuyTree from '../../illustrations/undraw_walking_outside_without human.svg';
import CreditCard from '../../illustrations/undraw_Credit_card_re_blml.svg';
import SentGift from '../../illustrations/undraw_send_gift_7o4m.svg';

import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

// import './ProductSection.css';

function HowToBuy() {
        return (
            <div>
                <Container className="HowToBuy">
                    <Row>
                        <Col md={12}>
                            <h1>How to become a farmer?</h1>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card className="HowToBuyCard">
                                <CardBody>
                                    <CardImg src="#picture" id="picHowTo1" alt="country" />
                                    <CardTitle tag="h5">Select the country</CardTitle>
                                    <CardText>Select the country you are planning to plant the tree</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={12} >
                            <Card className="HowToBuyCard">
                                <CardBody>
                                    <CardImg src={BuyTree} id="picHowTo2" alt="tree" />
                                    <CardTitle tag="h5">Choose the tree</CardTitle>
                                    <CardText>Choose from many species the tree you want to plant</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card className="HowToBuyCard">
                                <CardBody>
                                    <CardImg src="#picture" id="picHowTo3" alt="sentyourgift" />
                                    <CardTitle tag="h5">Fill in the Contact Form</CardTitle>
                                    <CardText>Write the recipient's name, a dedication and deliver it via email.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div id='contact'></div>
            </div>
        )
    
}

export default HowToBuy;