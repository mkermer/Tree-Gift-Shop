import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/NavigationBar/Navigation";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Footer/>
    </div>
  );
}

export default App;
