import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import faq from './faq';
import { ChevronBarDown } from "react-bootstrap-icons";
import './FaqQuestion.css';

function FaqQuestion(){

    return(
        <>
        {faq.map((item) => (
                <div  key={item.id}>
                    <Col lg={6} xs={12}> 
                    
                    <Accordion defaultActiveKey="0">
                        <Card className="QuestionCard">
                            <Card.Header className="FaqHeader">

                                <Row>
                                    <Col md={11}>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            {item.question} 
                                        </Accordion.Toggle>
                                    </Col>
                                
                                    <Col md={1}>
                                        <Accordion.Toggle className="AccButton" as={Button} variant="link" eventKey="1">
                                            <ChevronBarDown size={25} />
                                        </Accordion.Toggle>
                                    </Col>
                                </Row>

                            </Card.Header>
                            
                            <Accordion.Collapse eventKey="1">

                                <Card.Body>
                                    {item.answer}
                                </Card.Body>

                            </Accordion.Collapse>

                        </Card>
                        </Accordion>
                        
                    </Col>
            </div>
            
        ))}
        </>

    )
}

export default FaqQuestion;