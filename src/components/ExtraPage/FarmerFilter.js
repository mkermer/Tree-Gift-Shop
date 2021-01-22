import {React, useContext} from 'react';
import {ProductContext} from '../../ProductContext'
import Form from 'react-bootstrap/Form'

function FarmerFilter(props){
  const {handleCountryChange, getTree} = useContext(ProductContext)

    return(
        <div className="FarmerFilter">
        
        <Form.Control as="select" name="countries" id="countries" onChange={handleCountryChange}>

        
          <option value="select">Select</option>
          <option value="guatemala">Guatemala</option>
          <option value="cameroon">Cameroon</option>
          <option value="kenya">Kenya</option>
          <option value="nepal">Nepal</option>
          <option value="france">France</option>
          
          </Form.Control>
        
      </div>
    );

}
export default FarmerFilter;