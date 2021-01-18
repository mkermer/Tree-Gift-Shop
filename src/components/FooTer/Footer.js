import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import HelpfulLinks from './HelpfulLinks';
import SignUp from './SignUp';
import Contact from './Contact';
import "./Footer.css";


function Footer() {
  return (
      <div className="test">
        <hr />
        {/* <Jumbotron fluid> */}
        <Container className="Footer">
          <Row>
            <Col xs={12} md={4} className="background">
                <HelpfulLinks />
            </Col>
            <Col xs={12} md={4}>
                <Contact />
            </Col>
            <Col xs={12} md={4} className="background">
                <SignUp/>
            </Col>
          </Row>
        </Container>
        {/* </Jumbotron> */}
        <hr />
        <Container className="FooterTwo">
          <Row>
            <Col xs={6} md={6} lg={6}>
              <p>&copy; 2021</p>
            </Col>
            <Col xs={6} md={6} lg={6} className="iconsFooter">
              <a href="https://www.facebook.com/Beautiful-trees-495046020549539/">
                <Facebook className="iconFooter" />
              </a>
              <a href="https://www.instagram.com/explore/tags/tree/?hl=de">
                <Instagram className="iconFooter" />
              </a>
              <a href="https://twitter.com/treesftf?lang=de">
                <Twitter className="iconFooter" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Footer;
