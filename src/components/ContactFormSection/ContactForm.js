import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function ContactForm (){
    return (
    <Form>
        <Row>
            <Col>
                <Form.Label>Your First Name</Form.Label>
                <Form.Control placeholder="First name" />
            </Col>
            <Col>
                    <Form.Label>Your Last Name</Form.Label>
                <Form.Control placeholder="Last name" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Your message" rows={3} />
                </Form.Group>    
            </Col>
        </Row>
        <Button type="submit">Send it</Button>
    </Form> 
    )   
    
}

export default ContactForm;