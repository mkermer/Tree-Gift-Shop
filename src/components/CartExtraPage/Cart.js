import React from "react";
import "./Cart.css";
import { CartContext } from "../../CartContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const {
    cart,
    addToCart,
    reduceCount,
    getTotal,
    total,
    setTotal,
    itemsCount,
    increaseCount,
    removeFromCart,
    sum,
    showMessage,
    resetCart,
  } = useContext(CartContext);

useEffect(() => {
  getTotal()
}, [])

  return (
    <div className="App">
      <div className="cart-container">
        <div className="cart-banner">
          <Link to="/">
            <h2 className="cart-close">X</h2>
          </Link>
          <h2>Your cart</h2>
          <p>Please complete your purchase</p>
        </div>
        <div className="items-cart-container">
          {cart.map((item) => (
            <div>
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
              <button value={item.id} onClick={() => {
                removeFromCart(item)
              }}>Remove</button>
            </div>
          ))}
        </div>
        <div className="total">
          {showMessage(cart)}
          <h4>Total:</h4>
          {/* {sum(cart, "price").toFixed(2)} $  */}
          ${parseFloat(total).toFixed(2)}
          <button className="checkout-button">Proceed to checkout</button>
          <button className="checkout-button" onClick={resetCart}>
            Reset Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
