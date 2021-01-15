import React, { Component } from 'react';
import  { Jumbotron, Container, Row, Col, Image, Button }  from 'react-bootstrap';

import Slideshow from './Slideshow';


export class HeroSection extends Component {
    render() {
        return (
                <Jumbotron fluid>
                    <Container>
                        <Row> 
                            <Col lg={{span: 4, offset: 2 }} md={4}> <Slideshow /> </Col>
                            <Col md={4}> 
                                <h1>Intro</h1>
                                <p>Intro Paragraph</p>
                                <Button>Read me</Button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron> 
        )
    }
}

export default HeroSection
