import "./App.scss";
import HeroSection from './components/HeroSection';
import InfoSection from "./components/InfoSection";
import ContactSection from "./components/ContactSection";
import LoginSection from './components/LoginSection';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ProductSection/>
      {/*<ProductList products={tree} />*/}
      <InfoSection/>
      <ContactSection/>
      <LoginSection/>
  

    </div>
  );
}

export default App;
