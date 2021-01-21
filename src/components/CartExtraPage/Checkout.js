import React from "react";
import { withRouter } from "react-router-dom";
import {CardElement} from '@stripe/react-stripe-js'



function Checkout() {
  return (
    <div class='check'>
    <form>
      <CardElement />
      </form>
    </div>
  );
}

export default withRouter(Checkout);