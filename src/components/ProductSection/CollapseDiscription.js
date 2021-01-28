import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import './CollapseDiscription.css'

function CollapseDescription(props) {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="tree-description"
          aria-expanded={open}
          className="ButtonDesc"
        >
         Details
        </Button>
        <Collapse in={open}>
          <div id="tree-description">
            {props.tree}
          </div>
        </Collapse>
      </div>
    );
  };

  export default CollapseDescription;

  