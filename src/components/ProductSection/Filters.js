import React from "react";

function Filters(props) {
  return (
    <div className="filters">
      <button onClick={props.sortByName}>Sort by name</button>
      &nbsp;
      <button onClick={props.priceAsc}>Price</button>
      &nbsp;
      <button onClick={props.priceDesc}>Price</button>
      &nbsp;
      <button onClick={props.co2Asc}>
        &nbsp; CO<sub>2</sub> Absorption
      </button>
      &nbsp;
      <button onClick={props.co2Desc}>
        CO<sub>2</sub> Absorption
      </button>
      &nbsp;
      <br></br>
      <br></br>
      <label htmlFor="countries">Select a country: </label>
      <select name="countries" id="countries" onChange={props.selectCountry}>
        <option value="all">Show all</option>
        <option value="guatemala">Guatemala</option>
        <option value="cameroon">Cameroon</option>
        <option value="kenya">Kenya</option>
        <option value="nepal">Nepal</option>
        <option value="france">France</option>
      </select>
    </div>
  );
}

export default Filters;