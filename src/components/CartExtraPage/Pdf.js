import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../CartContext";
import { ProductContext } from "../../ProductContext";
import "./Pdf.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();

function Pdf() {
  const {
    setGiftcardTrees,
    giftcardTrees,
    setRecipientName,
    recipientName,
    setGiftMessage,
    giftMessage,
  } = useContext(ProductContext);

  return (
    <div id="certificate-container">
      <h4>Tree certificate</h4>
      <h4>{recipientName}</h4>
      <h3 id="certificate-header">Has been gifted these beautiful trees:</h3>
      {giftcardTrees.map((item) => (
        <div>
          <span>
            {item.tree_name} in {item.country}
          </span>
        </div>
      ))}
      <div>{monthNames[d.getMonth()]}</div>
    </div>
  );
}

export default Pdf;
