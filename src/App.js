import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./components/CartExtraPage/Cart";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Navigation from "./components/NavigationBar/Navigation";
import Footer from "./components/FooTer/Footer";
import "./App.scss";
// import HeroSection from "./components/HomeSection/HeroSection";
// import InfoSection from "./components/FaqSection/InfoSection";
import AddTrees from "./components/NavigationBar/AddTrees";
// import FaqSection from "./components/FaqSection/FaqSection";
// import Impressum from "./components/ImpressumExtraPage/Impressum";
import Home from "./components/HomeSection/Home";
import {LoginProvider} from './LoginContext';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <LoginProvider>
      <ProductProvider>
        <CartProvider>
          <div className="App">
            <Navigation />
              <Home />
            <Switch>
              <Route exact path="/" />
              <Route path="/checkout" component={Cart} />
              <Route path="/add" component={AddTrees} />
            </Switch>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
