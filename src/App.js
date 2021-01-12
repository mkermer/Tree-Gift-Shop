import tree from "./tree.json";
import "./components/TreeCard.css";
import "./components/Search.css";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <ProductList products={tree} />
    </div>
  );
}
export default App;