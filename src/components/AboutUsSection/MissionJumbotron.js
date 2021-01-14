import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';


export class MissionJumbotron extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <h3>Our Mission</h3>
                            <p>Our philosophy is to create sustainable ecosystems and allow farmers to meet the
                            initial costs of planting trees, ensuring food sovereignty and income opportunities.
                            </p>
                        </Col>
                        <Col md={7}> <Image src="holder.js/171x180" rounded fluid /> </Col>
                    </Row>
                </Container>
            </Jumbotron> 
        )
    }
}

export default MissionJumbotron




