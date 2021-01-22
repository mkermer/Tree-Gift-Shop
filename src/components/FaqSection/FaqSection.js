import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaqQuestion from "./FaqQuestion";
// import './FaqSection.css';

function FaqSection() {
  return (
    <Container>
    <Col md={12}>
        <h1>Little FAQ</h1>
      <p>The answer to your question might be here!</p>
    </Col>
      <Row>
        <FaqQuestion />
      </Row>
    </Container>
  );
}

export default FaqSection;

