import React from "react";
import { CartContext } from "../../CartContext";
import { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

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
    resetCart,
  } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      getCart();
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    setTimeout(() => {
      saveCart();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <Container id="cart-container">
      <div className="cart-banner">
        <div>
          <h2 id="cart-close" onClick={showSidebar}>
            X
          </h2>
        </div>
        <div id="cart-h-text">
          <h2>Cart</h2>
          <p>Please complete your purchase</p>
        </div>
      </div>

      <div className="Liste">
        {cart.map((item) => (
          <div key={item.tree_id}>
            <ListGroup className="cd-cart-list">
              <ListGroup.Item className="cd-cart-list-items">
                <div className="cd-cart-head">
                  <img
                    src={item.tree_img}
                    alt={item.name}
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h3>{item.tree_name}</h3>
                    <p>{item.country}</p>
                  </div>
                </div>
                <div id="cd-cart-btn">
                  <Button
                    id="item-button-remove"
                    value={item.id}
                    onClick={() => {
                      reduceCount(item.tree_id);
                    }}
                  >
                    -
                  </Button>
                  <span id="cd-cart-count">{item.count}</span>
                  <Button
                    id="item-button-add"
                    value={item.id}
                    onClick={() => {
                      increaseCount(item.tree_id);
                    }}
                  >
                    +
                  </Button>
                  <div id="cd-price">
                    ${(item.price * item.count).toFixed(2)}
                  </div>
                </div>
                <Button
                  value={item.id}
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </div>
        ))}
      </div>
      <div className="total">
        {/* {showMessage(cart)} */}
        <div id="total-sum">
          <h4>Total:</h4>
          <p>$ {parseFloat(total).toFixed(2)}</p>
        </div>

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
        </div>
      </div>
    </Container>
  );
}

export default withRouter(Cartt);