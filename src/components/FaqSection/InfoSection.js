import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Planting } from "../../illustrations/undraw_environment_iaus.svg";

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});


function InfoSection() {
        return (
            <Container>
                <Row>
                    <Col 
                        data-aos="fade-right" 
                        data-aos-offset="500"
                        data-aos-duration="500"
                        lg={6} md={6} sm={12}> <Planting width={350}/></Col>
                    <Col 
                        data-aos="fade-left"
                        data-aos-offset="550"
                        data-aos-duration="550" 
                        lg={6} md={6} sm={12}><h1>Why Treeduce?</h1> </Col>
                    <Col 
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-sine"
                        lg={6} md={6} sm={12}>
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
                    <Col 
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-sine"
                        lg={6} md={6} sm={12}>
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
        );
}

export default InfoSection;
