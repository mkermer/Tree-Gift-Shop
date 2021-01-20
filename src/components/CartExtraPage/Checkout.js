import React from "react";
import { withRouter } from "react-router-dom";
import {Elements, CardElement} from '@stripe/react-stripe-js'

const cardElementOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: "#fff",
            "::placeholder": {
                color: "#87bbfd"
            }
        },
        invalid: {
            color: "#FFC7EE"
        }
    }
}


function Checkout() {
  return (
    <div class='check'>
        ss
      <CardElement options={cardElementOptions}/>
      ss
    </div>
  );
}

export default withRouter(Checkout);