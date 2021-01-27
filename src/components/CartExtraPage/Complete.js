import React, { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import { ProductContext } from "../../ProductContext";
import PageError from "../Page404";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Complete.css";

function Complete() {
  const { Show } = useContext(ProductContext);
  const { getOrders, orders } = useContext(CartContext);

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!orders || orders.length < 1) {
    return <PageError />;
  }

  return (
    <div id="complete">
      {Show()}
      <h4>Thank you for your purchase!</h4>
      <h2>Proceed to your profile to continue the gifting procedure!</h2>
      <Button
        as={Link}
        to="gift"
        className="btn-primary"
        id="payment-complete-button"
      >
        Proceed
      </Button>
    </div>
  );
}

export default Complete;
