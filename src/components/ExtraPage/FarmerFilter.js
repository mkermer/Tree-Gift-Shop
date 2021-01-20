import React from 'react';

function FarmerFilter(props){
    return(
        <div>
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
export default FarmerFilter;