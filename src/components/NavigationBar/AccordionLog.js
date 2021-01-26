import React from 'react';
import FormLogin from "./FormLogin";
import FormSignUp from "./FormSignUp";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LoginProvider } from "../../LoginContext";

function AccordionLog() {

  return (
    <LoginProvider>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Login
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <FormLogin />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Sign up
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <FormSignUp />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </LoginProvider>
  );
}

export default AccordionLog;