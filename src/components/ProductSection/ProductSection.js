import { useContext, useEffect } from "react";
import TreeCard from "./TreeCard";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { CartContext } from "../../CartContext";
import './ProductSection.css';

import HowToBuy from './HowToBuy';

function ProductSection(props) {
   const {addToCart} = useContext(CartContext);

  const {handleCountryChange, sortByCoDescending, sortByCoAscending, sortByName, sortByPriceAscending, sortByPriceDescending, handleChange, getTree, tree} = useContext(ProductContext);

 useEffect(() => {
   setTimeout(() => {
     getTree()
   }, 500);
 }, [])
       return (
      
        <Container className="ProductSection"> 
          <Row> 
            <Col>
            <HowToBuy/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <h1>Plant a tree</h1>
            <div id='products'></div>
            </Col>
          </Row>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} sx={12}> 
              <Searchbar id="search" handleChange={handleChange} />
            </Col>
          </Row>
          <Row> 
            <Col xl={12} lg={12} md={12} sm={12} sx={12}> 
              <Filters
                priceDesc={sortByPriceDescending}
                priceAsc={sortByPriceAscending}
                sortByName={sortByName}
                co2Asc={sortByCoAscending}
                co2Desc={sortByCoDescending}
                selectCountry={handleCountryChange}
              />
            </Col>
          </Row>
          <Row>
              <TreeCard products={tree} add={addToCart} />
          </Row>
      </Container>
      )
    }
export default ProductSection;
