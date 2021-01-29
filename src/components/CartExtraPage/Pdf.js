import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import dateFormat from "dateformat";
import "./Pdf.css";

const ref = React.createRef();

const now = new Date();
const currentDay = dateFormat(now, "mmmm dS, yyyy");

function Pdf(props) {
  const { recipientName, giftMessage } = useContext(ProductContext);

  let result = props.trees.reduce(function (tot, arr) {
    return tot + arr.count;
  }, 0);

  return (
    <div className="certif">
      <div id="certificate-container">
        <div id="certificate-header-container" ref={ref}>
          <h4 id="certificate-header">Tree certificate</h4>
        </div>
        <h3 id="certificate-desc">
          {result} wonderful trees are being grown in new tree plantations in
          the name of
        </h3>
        <h4 id="recipientName">{recipientName}</h4>
        <div id="certificate-items">
          {props.trees.map((item) => (
            <span id="certificate-item">
              {" "}
              {item.count} {item.tree_name} trees in {item.country},{" "}
            </span>
          ))}
        </div>
        <div className="date">on {currentDay}</div>
        <div id="quote">
          <h3>Our planet can now breath a little deeper</h3>
          <h3>{giftMessage}</h3>
        </div>
        <button>Download</button>
      </div>
    </div>
  );
}

export default Pdf;
