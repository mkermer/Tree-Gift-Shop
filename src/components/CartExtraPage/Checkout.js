import {React, useEffect, useContext, useState} from "react";
import { withRouter } from "react-router-dom";
import {CardCvcElement, CardExpiryElement,CardNumberElement, CardElement} from '@stripe/react-stripe-js'
import {ProductContext} from '../../ProductContext'
import {CartContext} from '../../CartContext'
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";



function Checkout() {
  const {Show} = useContext(ProductContext)
  const {total, getTotal, cart, getCart} = useContext(CartContext)

  const cardElement = document.getElementById('cardElement')
  const checkoutButton = document.getElementById('checkout-button')


useEffect(() => {
    setTimeout(() => {
      getCart();
    }, 400);
  }, []);

getTotal();

const handleSubmit = (e) => {
  e.preventDefault()
  if(cardElement.className === 'StripeElement StripeElement--complete') {
    alert('proceed')
  } else {
    alert('incomplete')
  }
}

  return (
    <div className='check'>
    {Show()}
    <h2>Complete purchase</h2>
    <div className='cartCheckout'>
      <h2>Summary</h2>
        {cart.map((item) => (
          <div className="items-checkout">
            <span>{item.tree_name} x {item.count} - </span>
            <span> ${(item.price * item.count).toFixed(2)} </span>
          </div>
        ))}
        <h2>Total:</h2>
            <span>${parseFloat(total).toFixed(2)}</span>
      </div>
    <span>Enter your personal data and valid card details to complete the purchase.</span>
    <div className="checkoutForm">
      <Form onSubmit={handleSubmit} id="contactForm">
      <Row>
        <Col>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Your First Name</Form.Label>
            <Form.Control required type="text" placeholder="Jane" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              What's your First Name?
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Your Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Doe" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              What's your Last Name?
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>E-mail address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="jane.doe@mail.com"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your e-mail address, so we can get in touch with you
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId='formGroupEmail'>
          <Form.Label>Card details</Form.Label>
            <CardElement id="cardElement" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="validationCustom04">
        <Form.Check
          required
          label={
            <label>
              I've read and accept the <Link to="/tos">Terms of Service</Link>
            </label>
          }
          feedback="You must agree before submitting."
        />
      </Form.Group>

      <Button variant="primary" type="submit" id='checkout-button'>
        Pay ${parseFloat(total).toFixed(2)}
      </Button>
    </Form>
      </div>
    </div>
  );
}

export default withRouter(Checkout);