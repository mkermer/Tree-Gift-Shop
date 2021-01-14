import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { ReactComponent as TeamTogether } from '../../illustrations/undraw_good_team_m7uu.svg';
import { ReactComponent as Plattform } from '../../illustrations/undraw_data_trends_b0wg.svg';

import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";


export class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    
                    
                    <Col md={6}>
                        <h1>About Us</h1>
                        <h3>Our Mission</h3>
                        <p>Our philosophy is to create sustainable ecosystems and allow farmers to meet the
                        initial costs of planting trees, ensuring food sovereignty and income opportunities.
                        </p>
                    </Col>
                    <Col md={1}> </Col>
                    <Col md={5} sm={1}> <TeamTogether /></Col>
                </Row>
                <Row> 
                    <Col> <Plattform /> </Col>
                    <Col md={6}>
                        <h3>Our History</h3>
                        <p>Treeduce is the only online platform in the world where you can have someone plant a tree for you and then follow it online.
                        Since its foundation in 2021 in Vienna, more than 1.000.000 trees have been planted in Austria, Africa, South America and Italy.
                        All trees are planted directly by local farmers and bring environmental, social and financial benefits to their communities.
                        Thanks to its business model, in 2021 Treereduce became part of the Certified B Corporations,
                        a network of companies that stand out for high environmental and social performance.
                        Every tree on Treeduce is geo-localized and photographed and has its online page, it can be kept or virtually gifted to others.
                        Thanks to these features, Treeduce's tree engages people and at the same time it represents a great communication and marketing tool for companies.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h4>Our Team</h4>
                    </Col>
                    <Col md={3}> 
                        <Card>
                            <CardBody>
                                <CardImg src={Plattform} id="pic" alt="tree" />
                                <CardTitle>Person 1</CardTitle>
                                <CardText> Blabalbla  </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <CardBody>
                                <CardImg src={Plattform} id="pic" alt="tree" />
                                <CardTitle>Person 2</CardTitle>
                                <CardText> Blabalbla  </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <CardBody>
                                <CardImg src={Plattform} id="pic" alt="tree" />
                                <CardTitle>Person 3</CardTitle>
                                <CardText> Blabalbla  </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <CardBody>
                                <CardImg src={Plattform} id="pic" alt="tree" />
                                <CardTitle>Person 4</CardTitle>
                                <CardText> Blabalbla  </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutUs