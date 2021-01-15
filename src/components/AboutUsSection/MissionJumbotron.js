import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as MissionImg } from '../../illustrations/undraw_the_world_is_mine_nb0e.svg';

export class MissionJumbotron extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 0 }} md={4} sm={12}>
                            <h6>Our Mission</h6>
                            <h3>Our philosophy is to create sustainable ecosystems and allow farmers to meet the
                            initial costs of planting trees, ensuring food sovereignty and income opportunities.
                            </h3>
                        </Col>
                        <Col lg={{ span: 4, offset: 2 }} md={{ span: 7, offset: 1 }} sm={{ span: 10, offset: 1 }} sx={{ span: 4, offset:6 }}><MissionImg /></Col>
                    </Row>
                </Container>
            </Jumbotron> 
        )
    }
}

export default MissionJumbotron
