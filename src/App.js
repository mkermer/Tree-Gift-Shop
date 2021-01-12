import "./App.scss";
import HeroSection from './components/HeroSection';
import InfoSection from "./components/InfoSection";
import ContactSection from "./components/ContactSection";
import LoginSection from './components/LoginSection';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <ProductSection></ProductSection>
      {/*<ProductList products={tree} />*/}
      <InfoSection></InfoSection>
      <ContactSection></ContactSection>
      <LoginSection></LoginSection>

    </div>
  );
}

export default App;
