import {ProductProvider} from './ProductContext'
import {CartProvider} from './CartContext'
import Navigation from "./components/NavigationBar/Navigation";
import Footer from "./components/FooTer/Footer";

import HeroSection from "./components/HomeSection/HeroSection";
import InfoSection from "./components/FaqSection/InfoSection";
import ContactSection from "./components/ContactFormSection/ContactSection";
import LoginSection from "./components/LoginSection/LoginSection";
import ProductSection from "./components/ProductSection/ProductSection";
import AboutUs from "./components/AboutUsSection/AboutUsSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Impressum  from "./components/ImpressumExtraPage/Impressum";

import "./App.scss";

function App() {
  return (
    <ProductProvider>
    <CartProvider>
    <div className="App">
      <Navigation />
          <InfoSection />
          <FaqSection />
      <Footer/>
      
    </div>
    </CartProvider>
    </ProductProvider>
  );
}

export default App;
