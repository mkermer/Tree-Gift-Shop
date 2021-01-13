import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
