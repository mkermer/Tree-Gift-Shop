import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class Impressum extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}> </Col>
                    <Col md={4}>
                        <h1>Impressum</h1>
                        <p>Impressum Paragraph</p>
                        <Button>Contact</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Impressum