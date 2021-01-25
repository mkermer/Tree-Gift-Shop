import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function MissionJumbotron() {
    return (
      <Jumbotron fluid className="MissionGoal">
        <Container id="MissionGoal-con">
          <Row>
            <Col>
              <h1>Our Mission</h1>
              <h3>
                Our philosophy is to create sustainable ecosystems and allow farmers to meet the
                initial costs of planting trees, ensuring food sovereignty and income opportunities.
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
}

export default MissionJumbotron;
