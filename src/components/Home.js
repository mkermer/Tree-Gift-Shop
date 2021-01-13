import tree from "../tree.json";
import ProductList from "./ProductList";
import { withRouter } from "react-router-dom";

function Home(props) {
  const { location } = props;
  function getState(state) {
    return state;
  }

  return (
    <div className="App">
      <ProductList products={tree} state={getState} />
      {location.pathname}
    </div>
  );
}

export default Home;
