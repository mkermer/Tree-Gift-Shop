import tree from "../tree.json";
import ProductSection from "../components/ProductSection/ProductSection";
import { withRouter } from "react-router-dom";

function Home(props) {
  const { location } = props;
  function getState(state) {
    return state;
  }

  return (
    <div className="App">
      <ProductSection products={tree} state={getState} />
      {location.pathname}
    </div>
  );
}

export default Home;
