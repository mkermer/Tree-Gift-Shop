import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
import { Route } from "react-router-dom";
import HeroSection from "../HomeSection/HeroSection";
import InfoSection from "../FaqSection/InfoSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import ContactSection from "../ContactFormSection/ContactSection";


function Home(props) {
  return (
    <div className="App">
        <div id="home">
          <HeroSection />
          <ProductSection products={tree} />
          <InfoSection />
          <AboutUsSection />
          <ContactSection />
        </div>
    </div>
  );
}

export default Home;
