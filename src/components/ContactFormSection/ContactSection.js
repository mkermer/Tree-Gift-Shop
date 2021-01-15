import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import ContactForm from './ContactForm';

import { ReactComponent as Contact } from '../../illustrations/undraw_contact_us_15o2.svg';

export class ContactSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} sx={12}>
                        <h1>Contact Us</h1>
                        <ContactForm />
                    </Col>
                    <Col lg={6, { order: 'last' }} md={12, { order: 'first' }} sm={12, { order: 'first' }} xs={{ order: 'first' }}> <Contact /></Col>
                </Row>
            </Container>
        )
    }
}

export default ContactSection
