import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ContactForm from './ContactForm';
import { ReactComponent as Contact } from '../../illustrations/undraw_contact_us_15o2.svg';


export class ContactSection extends Component {
    render() {
        return (
            <Container>
                <Row>

                    <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={12} xs={{ span: 10, offset: 1 }}>
                        <Contact />
                    </Col>
                    <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={12} xs={{ span: 10, offset: 1 }}>

                    <h4>Contact Us</h4>
                     <ContactForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactSection;
