import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
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
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
