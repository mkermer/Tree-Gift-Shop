import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import {ReactComponent as Page404} from '../illustrations/undraw_page_not_found_su7k.svg';

function PageError() {
        return (
            <div>
            <Container className="BigErrorMessage">
                <Row>
                    <Col lg={12} md={12} sx={12}> <Page404 /> </Col>
                    <Col>
                        <h1>Upps!</h1>
                        <p>Something went wrong</p>
                    </Col>
                </Row>
            </Container>
 </div>
);
}

export default PageError;