import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
import Slideshow from "./Slideshow"
import { Route } from "react-router-dom";



function Home(props) {

  return (
    <div className="App">
      <Route exact path='/'>
        <Slideshow />
        <ProductSection products={tree} />
      </Route>
    </div>
  );
}

export default Home;
