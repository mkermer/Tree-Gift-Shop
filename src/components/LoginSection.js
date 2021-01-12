import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class LoginSection extends Component {
    render() {
        return (
            <Container> 
                <Row>
                    <Col md={2}>
                        <h1>Login</h1>
                        <p>Have you already an account Paragraph</p>
                        <Button>Login</Button>
                    </Col>
                    <Col md={10}></Col>
                </Row>
            </Container>
        )
    }
}

export default LoginSection
