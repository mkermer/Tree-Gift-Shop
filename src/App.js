

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
// import "./App.scss";
// import HeroSection from "./components/HeroSection";
// import InfoSection from "./components/InfoSection";
// import ContactSection from "./components/ContactSection";
// import LoginSection from "./components/LoginSection";
// import ProductSection from "./components/ProductSection";
// import AboutUs from "./components/AboutUsSection";
// import FaqSection from "./components/FaqSection";
// import Impressum  from "./components/Impressum";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navigation />
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/checkout">Cart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/checkout" exact>
              <Cart />
//       <HeroSection/>
//       <ProductSection/>
//       <InfoSection/>
//       <ContactSection/>
//       <LoginSection/>
//       <AboutUs/>
//       <FaqSection/>
//       <Impressum/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

);
}
export default App;
