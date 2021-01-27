import React, { useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import faq from './faq';
import { ChevronBarDown } from "react-bootstrap-icons";
import './FaqQuestion.css';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { AccordionContext } from 'react-bootstrap';




function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <ChevronBarDown  
      size={25}
      className={isCurrentEventKey ? "rotateUp AccBut" : "rotateDown AccBut"}
      onClick={decoratedOnClick}
      />
    );
  }
  
function FaqQuestion(){




    return(
        <>
        {faq.map((item) => (               
                    <Col lg={6} xs={12} key={item.id}> 
                    
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
                                        <ContextAwareToggle as={Button} variant="link" eventKey="1"/>
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

            
        ))}
        </>

    );
}

export default FaqQuestion;