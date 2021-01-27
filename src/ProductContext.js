import React, { useState, createContext } from "react";
import Confetti from "react-confetti";
import Axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [treeName, setTreeName] = useState("");
  const [treeDesc, setTreeDesc] = useState("");
  const [treeImg, setTreeImg] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [co2, setCo2] = useState("");
  const [tree, setTrees] = useState();
  const [products, setProducts] = useState();
  const [farmerFilter, setFarmerFilter] = useState();
  const [selectedTree, setSelectedTree] = useState([]);

  //============Confetti==============//
  const Show = () => {
    return <Confetti recycle={false} />;
  };

  //============Get trees from database==============//

  const getTree = () => {
    Axios.post("https://treeduce-server.herokuapp.com/getTree").then(
      (response) => {
        setTrees(response.data);
        setProducts(response.data);
      }
    );
  };

  //============Add a tree to database==============//

  const addTree = (e) => {
    e.preventDefault();
    Axios.post("https://treeduce-server.herokuapp.com/add", {
      tree_name: treeName,
      tree_description: treeDesc,
      tree_img: treeImg,
      price: price,
      country: country,
      co2: co2,
    });
    alert("Tree added successfuly");
    let form = document.getElementById('addTreeForm')
    form.reset()
  };

  //============Search==============//

  function handleChange(e) {
    var filteredProductList = products.filter(
      (product) =>
        product.tree_name.toLowerCase().indexOf(e.target.value.toLowerCase()) >=
        0
    );
    setTrees(filteredProductList);
  }

  //============Sorting==============//

  function sortByPriceDescending() {
    let newProducts = [...tree];
    let sorted = newProducts.sort((a, b) => b.price - a.price);
    setTrees(sorted);
  }

  function sortByPriceAscending() {
    let newProducts = [...tree];
    let sorted = newProducts.sort((a, b) => a.price - b.price);
    setTrees(sorted);
  }

  function sortByName() {
    let newProducts = [...tree];
    let sorted = newProducts.sort((a, b) =>
      a.tree_name.localeCompare(b.tree_name)
    );
    setTrees(sorted);
  }

  function sortByCoAscending() {
    let newProducts = [...tree];
    let sorted = newProducts.sort((a, b) => a.co2 - b.co2);
    setTrees(sorted);
  }

  function sortByCoDescending() {
    let newProducts = [...tree];
    let sorted = newProducts.sort((a, b) => b.co2 - a.co2);
    setTrees(sorted);
  }

  function handleCountryChange(e) {
    let sorted = [];
    products.forEach((obj) => {
      if (obj.country.toLowerCase() === e.target.value) {
        return sorted.push(obj);
      } else if (e.target.value === "all") {
        return (sorted = products);
      } else if (e.target.value === "select") {
        return (sorted = []);
      }
    });
    setTrees(sorted);
  }
  function handleFarmerFilter(e) {
    let sorted = [];
    products.forEach((obj) => {
      if (obj.country.toLowerCase() === e.target.value) {
        return sorted.push(obj);
      } else if (e.target.value === "default") {
        return (sorted = []);
      }
    });
    setFarmerFilter(sorted)
  }





  function addToSelectedTree(e) {
      setSelectedTree({ ...e });
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        farmerFilter,
        handleFarmerFilter,
        addToSelectedTree,
        selectedTree,
        Show,
        treeName,
        setTreeName,
        treeDesc,
        setTreeDesc,
        treeImg,
        setTreeImg,
        price,
        setPrice,
        getTree,
        addTree,
        country,
        setCountry,
        co2,
        setCo2,
        tree,
        setTrees,
        setProducts,
        handleCountryChange,
        sortByCoDescending,
        sortByCoAscending,
        sortByName,
        sortByPriceAscending,
        sortByPriceDescending,
        handleChange,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
