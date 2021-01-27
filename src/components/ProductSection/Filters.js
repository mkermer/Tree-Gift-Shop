import React, { useState, useEffect } from "react";
import { SortAlphaDown } from 'react-bootstrap-icons';
import { SortNumericDown } from 'react-bootstrap-icons';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import './Filter.css'

function Filters(props) {

  var [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    props.selectCountry({
      target: {
        value: selectedCountry
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  return (
    <div>
    <div className="filters">

      <Button onClick={props.sortByName}>Name <SortAlphaDown /></Button>
      <Button onClick={props.priceAsc}>Price <SortNumericDown /></Button>
      <Button onClick={props.priceDesc}>Price <SortNumericUp /></Button>

      <Button onClick={props.co2Asc}>
        CO<sub>2</sub> <SortNumericDown />
      </Button>

      <Button onClick={props.co2Desc}>
        CO<sub>2</sub> <SortNumericUp />
      </Button>
      </div>

      <div>
        
        <Form.Control as="select" name="countries" value={selectedCountry} className="SelectCountry" onChange={(e) => setSelectedCountry(e.target.value)}>
          <option className="hide" value="" disabled>Select a country</option>
          <option value="all">Show all</option>
          <option value="guatemala">Guatemala</option>
          <option value="cameroon">Cameroon</option>
          <option value="kenya">Kenya</option>
          <option value="nepal">Nepal</option>
          <option value="france">France</option>
        </Form.Control>
      </div>
    </div>
  );
}

export default Filters;
