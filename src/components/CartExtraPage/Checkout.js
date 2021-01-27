import { React, useEffect, useContext, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../../CartContext";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    total,
    getTotal,
    cart,
    getCart,
    setCart,
    saveCart,
    placeOrder,
  } = useContext(CartContext);

  const stripe = useStripe();
  const elements = useElements();
  const amount = Number(parseFloat(total * 100).toFixed(2));

  useEffect(() => {
    getTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  useEffect(() => {
    setTimeout(() => {
      getCart();
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardElementOptions = {
    hidePostalCode: true,
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    const cardElement = elements.getElement(CardElement);

    if (!total) {
      alert(`You don't have anything in your cart.`);
      return;
    }

    if (!cardElement._complete) {
      alert("Please check your card details.");
      return;
    }

    setIsProcessing(true);

    const response = await axios.post(
      "https://treeduce-server.herokuapp.com/payment",
      {
        amount: amount,
      }
    );

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    const confirmedCardPayment = await stripe.confirmCardPayment(
      response.data.client_secret,
      {
        payment_method: paymentMethodReq.paymentMethod.id,
      }
    );

    if (
      confirmedCardPayment.paymentIntent &&
      confirmedCardPayment.paymentIntent.status === "succeeded"
    ) {
      placeOrder();
      setCart([]);
      saveCart();
      setTimeout(() => {
        window.location.href = "/complete";
      }, 4000);
    } else {
      alert("An error occured while processing your payment.");
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h4 id="checkout-header">Complete purchase</h4>
      <hr />
      <div className="check">
        <div className="cartCheckout">
          <h2>Summary</h2>
          {cart.map((item) => (
            <div className="items-checkout" key={item.tree_id}>
              <span>
                {item.tree_name} x {item.count} -{" "}
              </span>
              <span> ${parseFloat(item.price * item.count).toFixed(2)} </span>
            </div>
          ))}
          <h2>Total:</h2>
          <span>${parseFloat(total).toFixed(2)}</span>
        </div>
        <span>
          Enter your personal data and valid card details to complete the
          purchase.
        </span>
        <div className="checkoutForm">
          <Form onSubmit={handleFormSubmit} id="contactForm" method="POST">
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
                    Please enter your e-mail address, so we can get in touch
                    with you
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Card details</Form.Label>
                  <CardElement id="cardElement" options={cardElementOptions} />
                </Form.Group>
              </Col>
            </Row>
            <h3>Testing cards:</h3>
            <span>Authentication required: 4000 0027 6000 3184</span>
            <br />
            <span>No auth: 4242 4242 4242 4242</span>
            <br />
            <span>Insufficient funds: 4000008260003178</span>
            <Form.Group controlId="validationCustom04">
              <Form.Check
                required
                label={
                  <label>
                    I've read and accept the{" "}
                    <Link to="/tos">Terms of Service</Link>
                  </label>
                }
                feedback="You must agree before submitting."
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              id="pay-button"
              disabled={isProcessing}
            >
              {isProcessing
                ? "Processing..."
                : `Pay $${parseFloat(total).toFixed(2)}`}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Checkout);
