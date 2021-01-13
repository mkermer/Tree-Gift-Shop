import React from "react";
import "./Cart.css";
import {CartContext} from '../../CartContext'
import {useState, useContext} from 'react'


function Cart(props) {
      const {cart, setCart, addToCart, removeFromCart} = useContext(CartContext);
    
    let sum = function (items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  };
  
  return (
    <div className="App">
      <div className="cart-container">
        <div className="cart-banner">
          <h2>Your cart</h2>
          <p>Please complete your purchase</p>
    </div>
    {cart.map(item => (
            <div>
            <img src={item.img} width='50px'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className='item-button-remove' value={item.id} onClick={() => {removeFromCart(item)}}>-</button>
            <button className='item-button-add' value={item.id} onClick={() => {addToCart(item)}}>+</button>
            </div>
          ))}
              <div className="total">
            <p>You have {cart.length} items in your cart</p>

        <h4>Total:</h4>
        {Math.round(sum(cart, "price") * 100) / 100} $
                      <button className='checkout-button'>Proceed to checkout</button>
      </div>

    </div>
    </div>
  );
}

export default Cart;
 