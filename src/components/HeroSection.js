import React, { Component } from 'react';
import  { Jumbotron, Container, Row, Col, Image, Button }  from 'react-bootstrap';


export class HeroSection extends Component {
    render() {
        return (
                <Jumbotron fluid>
                    <Container>
                        <Row> 
                            <Col md={8}> <Image src="holder.js/171x180" rounded fluid /> </Col>
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
