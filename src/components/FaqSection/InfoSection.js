import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Enviroment } from '../../illustrations/undraw_environment_iaus.svg';

import "./InfoSection.scss";

export class InfoSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}><Enviroment className="enviro"/></Col>
                    <Col lg={6} md={12} sm={12}><h1>Why Treeduce?</h1> </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3>Our trees</h3>
                        <p>Our trees are planted in agroforestry projects that
                        promote virtuous interaction among different species
                        and sustainable use of resources and land.
                        </p>
                        <h3>Environmental benefits</h3>
                        <p>All trees are good for the environment: they absorb CO2,
                        emit oxygen, promote biodiversity, counteract soil erosion
                        and much more.
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3>Social benefits</h3>
                        <p>Rural communities involved in our projects receive training and financial support.
                        They are the ones who take care of the trees and enjoy their fruits.
                        </p>
                        <h3>Making the difference</h3>
                        <p>Our philosophy is to create sustainable ecosystems and allow farmers to meet the
                        initial costs of planting trees, ensuring food sovereignty and income opportunities.
                        </p>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default InfoSection
