import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

import axios from 'axios';

function ContactForm() {
  const [modalShow, setModalShow] = useState(false);
  const [formName, setFormName] = useState('')
  const [lastFormName, setFormLastName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

console.log(formEmail)

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: formName
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        console.log(response.data.status)
        alert("Message failed to send.")
      }
    })
    setModalShow(!modalShow);
    let form = document.getElementById("contactForm");
    form.reset();
  };



  return (
    <Form onSubmit={handleSubmit} id="contactForm" method="POST">
      <Row>
        <Col>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Your First Name</Form.Label>
            <Form.Control required type="text" placeholder="Jane" onChange={(e) => setFormName(e.target.value)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              What's your First Name?
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Your Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Doe" onChange={(e) => setFormLastName(e.target.value)}/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              What's your Last Name?
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>E-mail address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="jane.doe@mail.com"
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your e-mail address, so we can get in touch with you
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="validationCustom03">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="What's up?"
              onChange={(e) => setFormMessage(e.target.value)}
              rows={3}
            />
            <Form.Control.Feedback>Great!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Drop us a line!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="validationCustom04">
        <Form.Check
          required
          label={
            <label>
              I've read and accept the <Link to="/tos">Terms of Service</Link>
            </label>
          }
          feedback="You must agree before submitting."
        />
      </Form.Group>

      <Button id="sent-btn" variant="primary" type="submit">
        Send
      </Button>
      <div id="contact"></div>
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
    </Form>
  );
}

export default ContactForm;
