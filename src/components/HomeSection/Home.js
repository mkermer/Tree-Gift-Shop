import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
// import Slideshow from "./Slideshow"
import { Route } from "react-router-dom";
import HeroSection from '../HomeSection/HeroSection'



function Home(props) {

  return (
    <div className="App">
      <Route exact path='/'>
        <HeroSection />
        <ProductSection products={tree} />
      </Route>
    </div>
  );
}

// { <Slideshow /> }

export default Home;
