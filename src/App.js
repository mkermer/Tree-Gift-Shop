import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Checkout from "./components/CartExtraPage/Checkout";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Navigation from "./components/NavigationBar/Navigation";
import Impressum from "./components/ExtraPage/Impressum";
import Footer from "./components/FooTer/Footer";
import "./App.scss";
import AddTrees from "./components/NavigationBar/AddTrees";
import Home from "./components/HomeSection/Home";
import { LoginProvider } from "./LoginContext";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import PageError from "./components/Page404";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <LoginProvider>
        <Elements stripe={stripePromise}>
        <ProductProvider>
          <CartProvider>
            <div className="App">
              <Navigation />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/add" component={AddTrees} />
                <Route path="/impressum" component={Impressum} />
                <Route path="*" component={PageError} />
              </Switch>
              <Footer />
            </div>
          </CartProvider>
        </ProductProvider>
        </Elements>
      </LoginProvider>
    </Router>
  );
}

export default App;
