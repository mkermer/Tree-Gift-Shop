import { useContext, useEffect } from "react";
import TreeCard from "./TreeCard";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { CartContext } from "../../CartContext";
import "./ProductSection.css";

import HowToBuy from "./HowToBuy";

function ProductSection(props) {
  const { addToCart, getOrders} = useContext(CartContext);

  const {
    handleCountryChange,
    sortByCoDescending,
    sortByCoAscending,
    sortByName,
    sortByPriceAscending,
    sortByPriceDescending,
    handleChange,
    getTree,
    tree,
  } = useContext(ProductContext);


 useEffect(() => {
   setTimeout(() => {
     getTree()
     getOrders()
   }, 100);
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
      

  return (
    <Container className="ProductSection">
      <Row>
        <Col>
          <HowToBuy />
        </Col>
      </Row>
      <div className="HashTo" id="products"/>
      <Row>
        <Col xs={12}>
          <h1>Plant a tree</h1>
          
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
      <TreeCard products={tree} add={addToCart} />
    </Container>
  );
}

export default ProductSection;
