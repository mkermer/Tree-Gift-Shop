import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import ContactForm from './ContactForm';

import { ReactComponent as Contact } from '../../illustrations/undraw_contact_us_15o2.svg';


export class ContactSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12, { span: 6, offset: 3 }} md={12, { span: 8, offset: 2 }} sm={12} xs={12, { span: 10, offset: 1 }}>
                        <Contact />
                    </Col>
                    <Col lg={12, { span: 6, offset: 3 }} md={12, { span: 8, offset: 2 }} sm={12} xs={12, { span: 10, offset: 1 }}>
                    <h4>Contact Us</h4>
                     <ContactForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactSection
