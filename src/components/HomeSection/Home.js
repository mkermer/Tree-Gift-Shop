import React, { useEffect, useContext } from "react";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import {ProductContext} from '../../ProductContext'
import { ReactComponent as IntroImg } from "../../illustrations/undraw_the_world_is_mine_nb0e.svg";
import "./Home.css";

function HeroSection() {
const {Show} = useContext(ProductContext)

useEffect(() => {
    Show()
}, [])

    return (
        <div>
            <Jumbotron fluid className= "hero">
                    {Show()}
                    <Container className="slogan">
                        <Row> 
                            
                            <Col lg={6} md={4}> 
                                <h1 className="text1">
                                
                                    Lets Make the Earth Green Again!</h1>
                                    
                                <h3 className="text2">Do you consider to buy a gift to your beloved one to save the world? </h3>

                                <Button> Get one now</Button>
                            </Col>
                            <Col lg={6} md={8} >
                            <IntroImg/>
                            
                
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron> 
        </div>
    );
}

export default HeroSection;