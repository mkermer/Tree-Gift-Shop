import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectCountry from '../../illustrations/undraw_Around_the_world_re_n353.svg';
import FillForm from '../../illustrations/undraw_delivery_address_03n0.svg';
import PlantTree from '../../illustrations/undraw_environment_iaus.svg';
import CollectGift from '../../illustrations/undraw_Gift_box_re_vau4.svg';
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import '../ProductSection/ProductSection.css'


function HowToBuy() {
        return (
            <div className="FarmerHowTo">
                <Container className="HowToBuy">
                    <Row>
                        <Col md={12}>
                            <h2 className="center">How to become a farmer</h2>
                        </Col>
                        <Col lg={3} md={12}>
                            <Card className="HowToBuyCard">
                                <CardBody>
                                    <CardImg src={SelectCountry} id="picHowTo" alt="country" />
                                    <CardTitle tag="h5">Select the country</CardTitle>
                                    <CardText>Select the country and the Tree you want to plant</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={3} md={12} >
                            <Card className="HowToBuyCard">
                                <CardBody>
                                    <CardImg src={FillForm} id="picHowTo" alt="Contact" />
                                    <CardTitle tag="h5">Fill in the Contact Form</CardTitle>
                                    <CardText>Leave us your contact data and one of our team members will contact you soon</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={3} md={12}>
                            <Card className="HowToBuyCard">
                            <CardBody>
                                    <CardImg src={PlantTree} id="picHowTo" alt="Plant" />
                                    <CardTitle tag="h5">Plant the Tree</CardTitle>
                                    <CardText>After confirmation buy and plant the tree and send us the receipt or collect it from one of our centers </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={3} md={12}>
                            <Card className="HowToBuyCard">
                                <CardBody>
                                    <CardImg src={CollectGift} id="picHowTo" alt="Discount" />
                                    <CardTitle tag="h5">Collect your Gift</CardTitle>
                                    <CardText>Send us a Picture from your newly planted Tree and recieve a 10$ Gift Card </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div id='contact'></div>
            </div>
        );
    
}

export default HowToBuy;