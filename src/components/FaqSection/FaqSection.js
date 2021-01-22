import React from "react";
import { Row } from "react-bootstrap";
import FaqQuestion from "./FaqQuestion";
// import './FaqSection.css';

function FaqSection() {
  return (
    <Row>
      <Row>
        <FaqQuestion />
      </Row>
      <div id="contact"></div>
    </Row>
  );
}

export default FaqSection;

