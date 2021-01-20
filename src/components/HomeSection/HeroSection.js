import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as IntroImg } from "../../illustrations/undraw_the_world_is_mine_nb0e.svg";

import "./Home.css";

// import Slideshow from './Slideshow';

export class HeroSection extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container className="slogan">
          <Row>
            <Col lg={6} md={4}>
              <div className="earth">
                <h1 className="text1">Lets Make the Earth Green Again!</h1>
                <h3 className="text2">
                  Do you consider to buy a gift to your beloved one to save the
                  world?{" "}
                </h3>
              </div>

              <Button as={HashLink} smooth to='/#products'>Get one now</Button>
            </Col>
            <Col lg={6} md={8}>
              <IntroImg />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default HeroSection;
