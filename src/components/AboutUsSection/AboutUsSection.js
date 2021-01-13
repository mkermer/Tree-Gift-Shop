import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { ReactComponent as Contact } from '../../illustrations/undraw_contact_us_15o2.svg';

export class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}> <Contact/></Col>
                    <Col md={12}>
                        <h1>About Us</h1>
                        <p>Get to Know the Team</p>
                        <Button>Contact</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutUs