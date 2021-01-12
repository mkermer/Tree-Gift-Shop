import "./App.scss";
import tree from "./tree.json";
import "./components/TreeCard.css";
import "./components/Search.css";
import ProductList from "./components/ProductList";
import Jumbo from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Jumbo></Jumbo>
      <ProductList products={tree} />
    </div>
  );
}

export default App;
