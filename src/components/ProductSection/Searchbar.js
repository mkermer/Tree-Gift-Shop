import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
  return (
    <div className="search-container">
      <input
        className="searchInput"
        type="text"
        placeholder="Search.."
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default Searchbar;
