import { useContext } from "react";
import TreeCard from "./TreeCard";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
// import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { CartContext } from "../../CartContext";

function ProductSection(props) {
  const {addToCart} = useContext(CartContext);
  const {products, handleCountryChange, sortByCoDescending, sortByCoAscending, sortByName, sortByPriceAscending, sortByPriceDescending, handleChange} = useContext(ProductContext);

  return (
    <div>
      <div id="search">
        <Searchbar handleChange={handleChange} />
      </div>
      <Filters
        priceDesc={sortByPriceDescending}
        priceAsc={sortByPriceAscending}
        sortByName={sortByName}
        co2Asc={sortByCoAscending}
        co2Desc={sortByCoDescending}
        selectCountry={handleCountryChange}
      />
      <TreeCard products={products} add={addToCart} />
    </div>
  );
}

export default ProductSection;
