import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

import { ChevronBarDown } from "react-bootstrap-icons";

import faq from './faq';

import './FaqSection.css';

function FaqSection(){

    return(
        <>
        {faq.map((item) => (
            <Accordion defaultActiveKey="0">
                <Card className="QuestionCard">
                    <Card.Header>
                        <Row> 
                            <Col md={11}> 
                                 <Accordion.Toggle as={Button} variant="link" eventKey="1">

                                    {item.question} 

                                </Accordion.Toggle>
                            </Col>
                            
                            <Col md={1}> 
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <ChevronBarDown size={25} />
                                </Accordion.Toggle>
                            </Col>
                        </Row>

                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>{item.answer}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> 
        ))}
        </>

    )
}

export default FaqSection;