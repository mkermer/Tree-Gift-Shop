import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaqQuestion from "./FaqQuestion";

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});

function FaqSection() {
  return (
    <Container>
    <Col md={12}>
        <h1 
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="500"
        >Little FAQ</h1>
      <p
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-duration="500"
      >The answer to your question might be here!</p>
    </Col>
      <Row 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="550">
        <FaqQuestion />
      </Row>
    </Container>
  );
}

export default FaqSection;

