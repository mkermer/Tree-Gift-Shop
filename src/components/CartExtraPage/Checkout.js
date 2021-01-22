import {React,  useContext} from "react";
import { withRouter } from "react-router-dom";
import {CardElement} from '@stripe/react-stripe-js'
import {ProductContext} from '../../ProductContext'



function Checkout() {
const {Show} = useContext(ProductContext)

  return (
    <div class='check'>
      {Show()}
    <form>
      <CardElement />
      </form>
    </div>
  );
}

export default withRouter(Checkout);