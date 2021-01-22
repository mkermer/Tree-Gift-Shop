import React from "react";
import { CartContext } from "../../CartContext";
import { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'


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
                    <>
                        <ListGroup class="cd-cart-items">
                            <ListGroup.Item>
                                <span class="cd-qty">{item.count}</span> {item.tree_name}
                                <div class="cd-price">${(item.price * item.count).toFixed(2)}</div>
                                <a href="#0" class="cd-item-remove cd-img-replace">Remove</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </>
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

export default withRouter(Cartt)