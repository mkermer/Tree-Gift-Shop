import React, { Component } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';

import ProductList from "./ProductList";
import tree from "../tree.json";
import "./TreeCard.css";
import "./Search.css";


export class ProductSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Product</h1>
                        <p>Contact Paragraph</p>
                    </Col>
                </Row>
                <Row>
                     <ProductList products={tree} /> 
                </Row>
            </Container>
        )
    }
}

export default ProductSection
