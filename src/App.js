import tree from "./tree.json";
import "./components/TreeCard.css";
import "./components/Search.css";
import ProductList from "./components/ProductList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProductList products={tree} />
    </div>
  );
}

export default App;
