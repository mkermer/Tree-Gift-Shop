import tree from "./tree.json";
import "./App.css";
import TreeCard from "./components/TreeCard";
import Search from "./components/Search";
import { useState } from "react";
import Filters from "./components/Filters";

function App() {
  const [products, setProducts] = useState(tree);
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
    let sorted = newProducts.sort((a, b) => Number(a.co2) - Number(b.co2));
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
    <div className="App">
      <Search handleChange={handleChange} />
      <Filters
        priceDesc={sortByPriceDescending}
        priceAsc={sortByPriceAscending}
        sortByName={sortByName}
        co2Asc={sortByCoAscending}
        co2Desc={sortByCoDescending}
        selectCountry={handleCountryChange}
      />
      <TreeCard products={products} />
    </div>
  );
}

export default App;
