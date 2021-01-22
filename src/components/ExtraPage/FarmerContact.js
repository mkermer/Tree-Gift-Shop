import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';

// import ContactModal from "./ContactModal";

function FarmerContact() {
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalShow(!modalShow);
    const form = document.getElementById('contactForm');
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} id="contactForm">
        <Row>
          <Col>
            <Form.Group controlId="validationCustom00">
              <Form.Label>Selected Tree</Form.Label>
              <Form.Control required type="text" placeholder="Selected: " />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                do later
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Your First Name</Form.Label>
              <Form.Control required type="text" placeholder="Jane" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                What's your First Name?
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Your Last Name</Form.Label>
              <Form.Control required type="text" placeholder="Doe" />
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
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter your e-mail address, so we can get in touch with you
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>

            <Form.Group controlId="validationCustom03">
              <Form.Label>Telephone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="+01 555 555"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter your telephone number, so we can get in touch with you
              </Form.Control.Feedback>
            </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="validationCustom04">
              <Form.Label>Postal Code </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="12345"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter your Postal Code
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="validationCustom05">
              <Form.Label>Country</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Canada"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter your Postal Code
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Any Questions?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Still a question open?"
                rows={3}
              />
              <Form.Control.Feedback>Great!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="validationCustom05">
          <Form.Check
            required
            label={(
              <label>
                I've read and accept the
                {' '}
                <a href="#tos">Terms of Service</a>
              </label>
          )}
            feedback="You must agree before submitting."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>

        {/* <ContactModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </Form>
    </Container>
  );
}

export default FarmerContact;
