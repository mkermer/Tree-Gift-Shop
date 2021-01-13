import React from "react";
import "./Cart.css";

function Cart(props) {

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
    {props.state.map(item => (
            <div>
            <img src={item.img} width='50px'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className='item-button-remove' value={item.id} onClick={() => {props.remove(item)}}>-</button>
            <button className='item-button-add' value={item.id} onClick={() => {props.add(item)}}>+</button>
            </div>
          ))}
              <div className="total">
            <p>You have {props.state.length} items in your cart</p>

        <h4>Total:</h4>
        {Math.round(sum(props.state, "price") * 100) / 100} $
                      <button className='checkout-button'>Proceed to checkout</button>
      </div>

    </div>
    </div>
  );
}

export default Cart;
 