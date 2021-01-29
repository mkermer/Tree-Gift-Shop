import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import {ReactComponent as Page404} from '../illustrations/undraw_page_not_found_su7k.svg';

import './Page404.css';

function PageError() {
        return (
            <div>
            <Container className="BigErrorMessage come-in">
                 <Row className="BEM-ro">
                    <Col lg={12} md={12} sx={12}> <Page404 /> </Col>
                    <Col>
                        <h1>Upps!</h1>
                        <span>Something went wrong</span>
                    </Col>
                </Row>
            </Container>
 </div>
);
}

export default PageError;