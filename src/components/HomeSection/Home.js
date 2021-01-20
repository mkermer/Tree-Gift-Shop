import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
// import Slideshow from "./Slideshow"
import { Route } from "react-router-dom";
import HeroSection from "../HomeSection/HeroSection";
import InfoSection from "../FaqSection/InfoSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import ContactSection from "../ContactFormSection/ContactSection";
import Farmer from '../ExtraPage/Farmer';

// import PageError from "../Page404";

function Home(props) {
  return (
    <div className="App">
      <Route exact path="/">
        <div id="home">
          <HeroSection />
          <ProductSection products={tree} />
          <InfoSection />
          <AboutUsSection />
          <ContactSection />
          <Farmer />
        </div>
      </Route>
    </div>
  );
}

export default Home;
