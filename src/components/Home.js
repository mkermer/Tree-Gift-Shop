import {useState} from 'react'
import tree from "../tree.json";
import TreeCard from "./ProductSection/TreeCard";
import ProductSection from "../components/ProductSection/ProductSection";

function Home(props) {

  return (
    <div className="App">
      <ProductSection products={tree} />
    </div>
  );
}

export default Home;
