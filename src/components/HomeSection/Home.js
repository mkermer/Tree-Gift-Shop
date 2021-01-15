import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
// import Slideshow from "./Slideshow"
import { Route } from "react-router-dom";
import HeroSection from '../HomeSection/HeroSection'
import InfoSection from "../FaqSection/InfoSection";



function Home(props) {

  return (
    <div className="App">
      <Route exact path='/'>
        <HeroSection />
        <ProductSection products={tree} />
        <InfoSection/>
      </Route>
    </div>
  );
}

// { <Slideshow /> }

export default Home;
