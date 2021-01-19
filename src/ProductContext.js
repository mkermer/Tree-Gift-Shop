import React, { useState, createContext, useEffect } from "react";
// import tree from "./tree";
import Axios from 'axios'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [treeName, setTreeName] = useState('')
    const [treeDesc, setTreeDesc] = useState('')
    const [treeImg, setTreeImg] = useState('')
    const [price, setPrice] = useState('')
    const [country, setCountry] = useState('')
    const [co2, setCo2] = useState('')
    const [tree, setTrees] = useState()
  // const [products, setProducts] = useState(tree);
 

   const addTree = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:9000/add', {
      tree_name: treeName,
      tree_description: treeDesc,
      tree_img: treeImg,
      price: price,
      country: country,
      co2: co2,
    }
    
    )
  }

  const getTree = () => {
    Axios.post('http://localhost:9000/getTree').then((response) => {
      setTrees(response.data)
    })
  }

//============Search==============//
  function handleChange(e) {
    var filteredProductList = tree.filter(
      (product) =>
        product.tree_name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
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
    let sorted = newProducts.sort((a, b) => a.tree_name.localeCompare(b.tree_name));
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
    console.log(e.target.value)
    let newProducts = [...tree];
    let sorted = [];
    newProducts.forEach((obj) => {
      if (obj.country.toLowerCase() === e.target.value) {
        return sorted.push(obj);
      } else if (e.target.value === "all") {
        return (sorted = [...tree]);
      }
    });
    setTrees(sorted);
  }

  return (
    <ProductContext.Provider
      value={{
        // products,
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
        // setProducts,
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
