import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function ContactForm (){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
            <Col>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Your First Name</Form.Label>
                    <Form.Control required type="text" placeholder="Jane" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">What's your First Name?</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Your Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Doe" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">What's your Last Name?</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row> 
            <Col> 
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>E-mail address</Form.Label>
                    <Form.Control required type="email" placeholder="jane.doe@mail.com" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please enter your e-mail address, so we can get in touch with you</Form.Control.Feedback>
                </Form.Group>
            </Col> 
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="validationCustom03">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control required as="textarea" placeholder="What's up?" rows={3} />
                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Drop us a line!</Form.Control.Feedback>
                </Form.Group>    
            </Col>
        </Row>
            <Form.Group controlId="validationCustom04">
                <Form.Check
                    required
                    label={<label>I've read and accept the <a href="#tos">Terms of Service</a></label>}
                    feedback="You must agree before submitting."
                />
            </Form.Group>
        <Button variant="primary" type="submit">Send it</Button>
    </Form> 
    )   
    
}

export default ContactForm;