import React from "react";
import "./TreeCard.css";

function TreeCard(props) {
  return (
    <div className="parent">
      {props.products.map((obj, index) => {
        return (
          <div className="card" key={index}>
            <img src={obj.img} id="pic" alt="tree" />
            <h3 className="card_name">{obj.name}</h3>
            <p>
              CO<sub>2</sub>: -{obj.co2}kg
            </p>
            <h3>{obj.price} $</h3>
            <button className="card-button" id={obj.id} onClick={() => props.add(obj)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TreeCard;
