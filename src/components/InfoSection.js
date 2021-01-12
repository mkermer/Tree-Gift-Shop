import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

export class InfoSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Info</h1>
                        <p>Info Paragraph</p>
                    </Col>
                    <Col md={8}></Col>
                </Row>
            </Container>
        )
    }
}

export default InfoSection
