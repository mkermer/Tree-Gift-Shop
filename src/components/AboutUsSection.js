import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}> </Col>
                    <Col md={4}>
                        <h1>About Us</h1>
                        <p>Get to Know the Team</p>
                        <Button>Contact</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutUs