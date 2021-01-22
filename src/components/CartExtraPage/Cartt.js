import React from "react";
import { CartContext } from "../../CartContext";
import { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from "reactstrap";


import "./Cart.css";

import { Container } from "react-bootstrap";

function Cartt(props) {
    const {
        cart,
        reduceCount,
        total,
        getTotal,
        saveCart,
        getCart,
        increaseCount,
        showSidebar,
        removeFromCart,
        showMessage,
        resetCart,
    } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            getCart();
        }, 400);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            saveCart();
        }, 2000);
    }, [total]);

    getTotal();

    return (
        <Container className="cart-container">
            <div className="cart-banner">
                <h2 className="cart-close" onClick={showSidebar}>
                    X
                </h2>
                <h2>Your cart</h2>
                <span>Please complete your purchase</span>
            </div>

            <>
                {cart.map((item) => (
                    <Card className="cart-items">
                        <CardBody>
                            <CardImg src={item.tree_img} alt={item.name} width="10px" />
                            <CardTitle>{item.tree_name}</CardTitle>
                            <CardSubtitle>{item.country}</CardSubtitle>

                            <CardText>$ {(item.price * item.count).toFixed(2)} </CardText>

                        
                                <Button
                                    className="item-button-remove"
                                    value={item.id}
                                    onClick={() => {
                                        reduceCount(item.tree_id)
                                    }}>
                                    -
                                </Button>
                       
                                <span>{item.count}</span>
                        
                            <CardText> 
                                
                               
                                <Button
                                    className="item-button-add"
                                    value={item.id}
                                    onClick={() => {
                                        increaseCount(item.tree_id);
                                    }}>
                                    +
                                </Button>
                            </CardText>
                            
                            <CardText> 
                                <Button
                                    value={item.id}
                                    onClick={() => {
                                    removeFromCart(item)
                                    }}>
                                    remove
                                </Button> 
                            </CardText>  
                        </CardBody>
                    </Card>

                )
                )}
            </>
            <div className="total">
                {showMessage(cart)}
                <h4>Total:</h4>
                <div className="sum">$ {parseFloat(total).toFixed(2)}</div>
                <div className="checkout-buttons-container">
                    <div>
                        <Button
                            as={Link}
                            to="/checkout"
                            className="checkout-button"
                            onClick={showSidebar}
                        >
                            To checkout
                                </Button>
                    </div>
                    <Button className="checkout-button" onClick={resetCart}>
                        Reset Cart
                            </Button>
                </ div>
            </div>
        </Container>

    )

}

export default withRouter(Cartt);