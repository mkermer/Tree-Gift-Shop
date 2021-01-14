import React, { useState, createContext } from "react";
import {Link} from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    setCart([...cart, { ...e }]);
    alert(`${e.name} was added to your cart!`);
  };

  const removeFromCart = (e) => {
    setCart(cart.filter((product) => product !== e));

    
  };

  const resetCart = () => {
    setCart([])
  }

    let sum = function (items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  };

  function showMessage(arr) {
    return (arr.length === 0 ? <>No items here yet. Wanna go shopping? <Link to='/'>See trees</Link></> : <p>You have {arr.length} items in your cart.</p>)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, sum, showMessage, resetCart}}>
      {props.children}
    </CartContext.Provider>
  );
};
