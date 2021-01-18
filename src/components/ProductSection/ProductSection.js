import { useContext } from "react";
import TreeCard from "./TreeCard";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { CartContext } from "../../CartContext";
<<<<<<< HEAD
=======
import './ProductSection.css';

>>>>>>> 3d19a99ea86bdb2a7cd0718bc406a65c8321f1ad
function ProductSection(props) {
   const {addToCart} = useContext(CartContext);
  const {products, handleCountryChange, sortByCoDescending, sortByCoAscending, sortByName, sortByPriceAscending, sortByPriceDescending, handleChange} = useContext(ProductContext);
       return (
<<<<<<< HEAD
        <Container> 
=======
      
        <Container className="ProductSection"> 
          <Row>
            <Col xs={12}>
            <h1>Plant a tree</h1>
            </Col>
          </Row>
>>>>>>> 3d19a99ea86bdb2a7cd0718bc406a65c8321f1ad
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
              <TreeCard products={products} add={addToCart} />
          </Row>
      </Container>
      )
    }
export default ProductSection;
