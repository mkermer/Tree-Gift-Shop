import React from "react";

function TreeCard(props) {
  return (
    <div className="parent">
      {props.products.map((obj) => {
        return (
          <div className="card" key={obj.id}>
            <img src={obj.img} id="pic" alt="tree" />
            <h3 className="card_name">{obj.name}</h3>
            <p>CO2: -{obj.co2}kg</p>
            <h3>{obj.price} $</h3> <button>Add</button>
          </div>
        );
      })}
    </div>
  );
}

export default TreeCard;
