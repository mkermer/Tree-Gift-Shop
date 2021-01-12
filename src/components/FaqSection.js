import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class FaqSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}> </Col>
                    <Col md={4}>
                        <p>FAQ</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FaqSection