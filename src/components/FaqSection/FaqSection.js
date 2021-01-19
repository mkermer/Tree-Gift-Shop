import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import faq from './faq';

function FaqSection(){
    return(
        <>
        {faq.map((item, id) => (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {item.question}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{item.answer}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> 

        ))}
        </>

    )
}

export default FaqSection;