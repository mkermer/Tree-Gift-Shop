import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./components/CartExtraPage/Cart";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Navigation from "./components/NavigationBar/Navigation";
import Impressum from "./components/ExtraPage/Impressum";
import Footer from "./components/FooTer/Footer";
import "./App.scss";
import AddTrees from "./components/NavigationBar/AddTrees";
import Home from "./components/HomeSection/Home";
import { LoginProvider } from "./LoginContext";

// import PageError from "./components/Page404";
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
                <Route path="/checkout" component={Cart} />
                <Route path="/add" component={AddTrees} />
                <Route path="/tos" component={Impressum} />
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

// still need to work on this one <Route path='*' exact={true} component={PageError} />
