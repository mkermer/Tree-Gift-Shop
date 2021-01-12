import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

export class ContactSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}> </Col>
                    <Col md={4}>
                        <h1>Contact</h1>
                        <p>Contact Paragraph</p>
                        <Button>Contact</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactSection
