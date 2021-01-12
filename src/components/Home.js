import tree from "../tree.json";
import ProductList from "./ProductList";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="App">
      <ProductList products={tree} />
      <Slideshow />
    </div>
  );
}

export default Home;
