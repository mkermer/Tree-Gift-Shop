import React from "react";
import "./Cart.css";
import { CartContext } from "../../CartContext";
import { LoginContext } from "../../LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

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
  const {getEmail} = useContext(LoginContext)
// console.log(getEmail())
  
  // if(getEmail()) {
  //   getCart()
  // }

  getTotal()

  return (
    <div className="App">
      <div className="cart-container">
        <div className="cart-banner">
          <Link to="/">
            <h2 className="cart-close" onClick={showSidebar}>X</h2>
          </Link>
          <h2>Your cart</h2>
          <span>Please complete your purchase</span>
        </div>
        <div className="items-cart-container">
          {cart.map((item) => (
            <div className="item">
              <img src={item.img} alt={item.name} width="50px" />
              <h3>{item.name}</h3>
              <span>$ {(item.price * item.count).toFixed(2)} </span>
              <button
                className="item-button-remove"
                value={item.id}
                onClick={() => {
                  reduceCount(item.id);
                }}
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                className="item-button-add"
                value={item.id}
                onClick={() => {
                  increaseCount(item.id);
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
          <div className="sum">
          $ {parseFloat(total).toFixed(2)}
          </div>
          <div className="checkout-buttons-container">
          <div>
          <Button className="checkout-button">To checkout</Button>
          </div>
          <Button className="checkout-button" onClick={saveCart}>Save cart</Button>
          <Button className="checkout-button" onClick={getCart}>Load Cart</Button>
          <Button className="checkout-button" onClick={resetCart}>
            Reset Cart
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
