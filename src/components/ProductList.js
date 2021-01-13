import React from "react";
import TreeCard from "./TreeCard";
import Searchbar from "./Searchbar";
import { useState } from "react";
import Filters from "./Filters";
import "./ProductList.css";
import Cart from "./Cart";
// import { useLocation } from "react-router-dom";

function ProductList(props) {
  const [products, setProducts] = useState(props.products);
  const [cartState, setCart] = useState([]);

  function handleChange(e) {
    var filteredProductList = props.products.filter(
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
    let newProducts = [...props.products];
    newProducts.forEach((obj) => {
      if (obj.country.toLowerCase() === e.target.value) {
        return sorted.push(obj);
      } else if (e.target.value === "all") {
        return (sorted = newProducts);
      }
    });
    setProducts(sorted);
  }

  function addToCart(e) {
    let cart = [];
    let newProducts = [...props.products];
    newProducts.forEach((obj) => {
      if (obj.id === Number(e.target.id)) {
        cart.push(obj);
        alert(`${obj.name} was added to your cart`);
      }
    });
    return setCart(cartState.concat(cart));
  }

  let arr = [...cartState];

  let sum = function (items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  };

  function removeFromCart(e) {
    let arr = [...cartState];
    arr.filter((obj) => {
      if (obj.id === Number(e.target.id)) {
        return arr.splice(arr.indexOf(obj), 1);
      }
    });
    setCart(arr);
  }

  return (
    <div className="ProductList">
      <div className="cart">
        <Cart state={cartState} />
      </div>
      {arr.map((product) => {
        return (
          <div className="cart-item">
            <p>{product.name} &nbsp;</p>
            <p>{product.price} $ &nbsp;</p>
            <button id={product.id} onClick={removeFromCart}>
              x
            </button>
          </div>
        );
      })}
      <div className="total">
        <h4>Total:</h4>
        {Math.round(sum(arr, "price") * 100) / 100} $
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

export default ProductList;
