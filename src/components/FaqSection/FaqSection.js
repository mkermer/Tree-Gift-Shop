import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FaqQuestion from './FaqQuestion';
// import './FaqSection.css';

function FaqSection(){

    return(
        <>
            <Row>
                <FaqQuestion />
            </Row>
        </>
    )
}

export default FaqSection;