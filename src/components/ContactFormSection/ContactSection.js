import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import { ReactComponent as Contact } from '../../illustrations/undraw_contact_us_15o2.svg';

export class ContactSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}> <Contact /></Col>
                    <Col lg={6} md={12} sm={12}>
                        <h2>Don't hesitate to contact us</h2>
                        <h1>Contact</h1>
                        <Button class="btn btn-secondary">Contact</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactSection
