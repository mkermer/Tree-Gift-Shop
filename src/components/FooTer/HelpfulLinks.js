import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function HelpfulLinks() {
  return (
    <>
      <h5>Helpful Links</h5>
      <br />

      <Row>
        <Col md={6} className="links">
          <p>
            <HashLink smooth to="/#faq">
              FAQ
            </HashLink>
          </p>
          <p>
            <Link to="/impressum">Legal notice</Link>
          </p>
          <p>
            <HashLink smooth to="/#about">
              About us
            </HashLink>
          </p>
        </Col>

        <Col md={6} className="links">
          <p>
            <Link to="/tos">Terms of Service</Link>
          </p>
          <p>
            <a href="#jobs">Join our team</a>
          </p>
          <p>
            <Link to="/farmer">Become a farmer!</Link>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default HelpfulLinks;
