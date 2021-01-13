import React from "react";
import "./Search.css";

function Searchbar(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search.."
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default Searchbar;
