import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./components/CartExtraPage/Cart";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Navigation from "./components/NavigationBar/Navigation";
import Footer from "./components/FooTer/Footer";
import './App.scss'
import Home from "./components/HomeSection/Home";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ContactSection from "./components/ContactFormSection/ContactSection";
import LoginSection from "./components/LoginSection/LoginSection"

import LoginSection from "./components/LoginSection/LoginSection";

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
              <Route path="/contact" component={ContactSection} />
              <Route path="/checkout" component={Cart} />
              <Route path="/add" component={LoginSection} />
            </Switch>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
