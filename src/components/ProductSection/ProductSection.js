import {useState, useContext} from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import TreeCard from "./TreeCard"
import Cart from '../CartExtraPage/Cart'
import tree from '../../tree'
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import "./TreeCard.css";
import "./ProductList.css";
import "./Search.css";
import {ProductContext} from '../../ProductContext'
import {CartContext} from '../../CartContext'

function ProductSection(props) {
      const [cart, setCart] = useContext(CartContext);
      const [products, setProducts] = useContext(ProductContext);

    const value = useContext(ProductContext)

    function addToCart(e) {
    setCart([...cart, { ...e }])
  }

    function removeFromCart(e) {
        setCart(
            cart.filter((product) => product !== e)
        )
    }

      function handleChange(e) {
    var filteredProductList = tree.filter(
      (product) =>
        product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    );
    setProducts(filteredProductList);
  }

  function sortByPriceDescending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  }

  function sortByPriceAscending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => a.price - b.price);
    setProducts(sorted);
  }

  function sortByName() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sorted);
  }

  function sortByCoAscending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => a.co2 - b.co2);
    setProducts(sorted);
  }

  function sortByCoDescending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => b.co2 - a.co2);
    setProducts(sorted);
  }

  function handleCountryChange(e) {
    let sorted = [];
    let newProducts = [...tree];
    newProducts.forEach((obj) => {
      if (obj.country.toLowerCase() === e.target.value) {
        return sorted.push(obj);
      } else if (e.target.value === "all") {
        return (sorted = newProducts);
      }
    });
    setProducts(sorted);
  }

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
        <Cart state={cart} remove={removeFromCart} add={addToCart} />
      </div>
            
        )
    }

export default ProductSection
