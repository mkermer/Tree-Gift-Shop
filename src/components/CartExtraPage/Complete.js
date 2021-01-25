import React, {useContext} from "react";
import {CartContext} from '../../CartContext'


function Complete() {
      const {total, getTotal, cart, getCart, paymentComplete, setPaymentComplete} = useContext(CartContext)
console.log(paymentComplete)

  if (!paymentComplete) {
    return (
      <div className="stop-container">
        elo
      </div>
    );
  }


    return (
        <div id='complete'>
            <span>Thank you for your purchase</span>
            
        </div>
    )
}

export default Complete
