import "./App.scss";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import ContactSection from "./components/ContactSection";
import LoginSection from "./components/LoginSection";
import ProductSection from "./components/ProductSection";
import AboutUs from "./components/AboutUsSection";
import FaqSection from "./components/FaqSection";
import Impressum  from "./components/Impressum";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ProductSection/>
      {/*<ProductList products={tree} />*/}
      <InfoSection/>
      <ContactSection/>
      <LoginSection/>
      <AboutUs/>
      <FaqSection/>
      <Impressum/>

    </div>
  );
}

export default App;
