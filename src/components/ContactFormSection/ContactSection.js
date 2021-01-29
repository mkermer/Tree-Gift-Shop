import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ContactForm from './ContactForm';
import { ReactComponent as Contact } from '../../illustrations/undraw_contact_us_15o2.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});

function ContactSection() {

        return (
            <Container>
                <Row>
                    <Col 
                        data-aos="zoom-in-up"
                        data-aos-offset="500"
                        data-aos-duration="600"
                        lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={12} xs={12}>
                        <Contact />
                    </Col>
                    <Col
                        data-aos="zoom-in-up"
                        data-aos-offset="400"
                        data-aos-duration="600"
                        lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={12} xs={12}>

                    <h4>Contact Us</h4>
                     <ContactForm />
                    </Col>
                </Row>
            </Container>
        );
}

export default ContactSection;