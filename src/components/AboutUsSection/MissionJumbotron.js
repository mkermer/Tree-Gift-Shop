import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';

import { ReactComponent as MissionImg } from '../../illustrations/undraw_the_world_is_mine_nb0e.svg';

export class MissionJumbotron extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col md={7}>
                            <h6>Our Mission</h6>
                            <p>Our philosophy is to create sustainable ecosystems and allow farmers to meet the
                            initial costs of planting trees, ensuring food sovereignty and income opportunities.
                            </p>
                        </Col>
                        <Col md={3}><MissionImg /></Col>
                    </Row>
                </Container>
            </Jumbotron> 
        )
    }
}

export default MissionJumbotron




