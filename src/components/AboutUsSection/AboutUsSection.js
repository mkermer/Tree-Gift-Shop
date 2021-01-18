import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as Plattform } from '../../illustrations/undraw_data_trends_b0wg.svg';
import Adrian from '../../illustrations/undraw_team_ih79_treeduce_3-01.svg'; 
import Yiulia from '../../illustrations/undraw_team_ih79_treeduce_3-02.svg';
import Morgane from '../../illustrations/undraw_team_ih79_treeduce_3-04.svg';
import Johanna from '../../illustrations/undraw_team_ih79_treeduce_3-03.svg';


import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

import MissionJumbotron from "./MissionJumbotron";

export class AboutUs extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row className="mt-20">
                    <Col lg={12} md={12}>
                        <h1>About Us</h1>
                    </Col>
                </Row>
                <Row> 
                    <Col lg={6} md={12} sm={12}> <Plattform /> </Col>
                    <Col lg={6} md={12}>
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
                </Container> 
                <MissionJumbotron />
                <Container>
                <Row>
                    <Col md={12}>
                        <h4>Our Team</h4>
                    </Col>
                    <Col lg={3} md={6} sm={6}> 
                        <Card>
                            <CardBody>
                                <CardImg src={Adrian} id="pic" alt="tree" />
                                <CardTitle tag="h5">Adrian</CardTitle>
                                <CardText>I love creating things that please my and people's eyes ;) </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <Card>
                            <CardBody>
                                <CardImg src={Yiulia} id="pic" alt="tree"/>
                                <CardTitle tag="h5">Yuliya</CardTitle>
                                <CardText>I got to know Programming in a preparation course, which helped me to 
                                    find out how I would like to rebuild my future.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <Card >
                            <CardBody>
                                <CardImg src={Morgane} id="pic" alt="tree" />
                                <CardTitle tag="h5">Morgane</CardTitle>
                                <CardText>I started coding in school and during the first lockdown I gave myself the goal to look at it again and learn 
                                    a lot new stuff about it.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <Card >
                            <CardBody>
                                <CardImg src={Johanna} id="pic" alt="tree" />
                                <CardTitle tag="h5">Johanna</CardTitle>
                                <CardText>I am an information and graphic designer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div id='contact'></div>            
            </div>
        )
    }
}

export default AboutUs