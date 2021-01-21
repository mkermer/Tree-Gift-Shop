import React from "react";
import "./Cart.css";
import { CartContext } from "../../CartContext";
import { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

function Cart(props) {
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
    <div className="cart-container">
      <div className="cart-banner">
        <h2 className="cart-close" onClick={showSidebar}>
          X
        </h2>
        <h2>Your cart</h2>
        <span>Please complete your purchase</span>
      </div>
      <div className="items-cart-container">
        {cart.map((item) => (
 <div className="item" key={item.tree_id}>
            <img src={item.tree_img} alt={item.name} width="50px" />
            <h3>{item.tree_name}</h3>
            <span>{item.country}</span>
            <h2>$ {(item.price * item.count).toFixed(2)} </h2>
            <button

              className="item-button-remove"
              value={item.id}
              onClick={() => {
                reduceCount(item.tree_id);
              }}
            >
              -
            </button>
            <span>{item.count}</span>
            <button
              className="item-button-add"
              value={item.id}
              onClick={() => {
                increaseCount(item.tree_id);
              }}
            >
              +
            </button>
            <Button
              value={item.id}
              onClick={() => {
                removeFromCart(item);
              }}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
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
        </div>
      </div>
    </div>
  );
}

export default withRouter(Cart);
