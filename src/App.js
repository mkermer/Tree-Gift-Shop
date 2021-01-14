import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Navigation from "./components/NavigationBar/Navigation";
import Footer from "./components/FooTer/Footer";
// import HeroSection from "./components/HomeSection/HeroSection";
// import InfoSection from "./components/FaqSection/InfoSection";
// import LoginSection from "./components/LoginSection/LoginSection";
// import ProductSection from "./components/ProductSection/ProductSection";
// import AboutUs from "./components/AboutUsSection/AboutUsSection";
// import FaqSection from "./components/FaqSection/FaqSection";
// import Impressum  from "./components/ImpressumExtraPage/Impressum";
import Cart from "./components/CartExtraPage/Cart";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/HomeSection/Home";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ContactSection from "./components/ContactFormSection/ContactSection";

import "./App.scss";

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <div className="App">
            <Navigation />
            <Route exact path="/">
              <Home />
            </Route>
            <Switch>
              <Route exact path="/about">
                <AboutUsSection />
              </Route>
              <Route exact path="/contact" component={ContactSection} />
              <Route exact path="/checkout" component={Cart} />
            </Switch>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
