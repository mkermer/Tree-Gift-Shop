import { React, useContext } from 'react';
import { ProductContext } from '../../ProductContext';

function FarmerFilter(props) {
  const { handleCountryChange, getTree } = useContext(ProductContext);

  return (
    <div>
      <label htmlFor="countries">Select a country: </label>
      <select name="countries" id="countries" onChange={handleCountryChange}>
        <option value="select">Select</option>
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
