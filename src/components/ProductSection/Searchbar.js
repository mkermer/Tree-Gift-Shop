import React from "react";
import "./Searchbar.css";
import Form from 'react-bootstrap/Form';

function Searchbar(props) {
  return (
    <div>
      <Form inline>
        <Form.Control
          className="searchInput"
          type="text"
          placeholder="Search.."
          onChange={props.handleChange}
      />
      </Form>
    </div>
  );
}

export default Searchbar;

