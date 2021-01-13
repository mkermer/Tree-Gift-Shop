import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search-container">
      <h2 className="search">Search</h2>
      <input
        type="text"
        placeholder="Find a tree!"
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default Search;
