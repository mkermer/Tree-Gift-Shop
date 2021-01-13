import React from "react";
import "./Cart.css";

function Cart(props) {
  // let cart = [...props.state];
  return (
    <div className="App">
      <div className="cart-container">
        <div class="cart-banner">
          <h2>Your cart</h2>
          <p>Please complete your purchase</p>
          {props.state.map((product) => {
            return (
              <div>
                <p>{product.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
