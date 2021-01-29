import { React, useEffect } from 'react';
import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
import HeroSection from "../HomeSection/HeroSection";
import InfoSection from "../FaqSection/InfoSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import ContactSection from "../ContactFormSection/ContactSection";
import FaqSection from "../FaqSection/FaqSection";
import Aos from 'aos';
import 'aos/dist/aos.css';


    Aos.init({ 
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
     });

function Home(props) {

  return (
    <div className="App">
        <div className="HashTo" id="home"/>
          <HeroSection />
          <div className="HashTo" id="info"/>
          <InfoSection />
          <div className="HashTo" id="howto"/>
          <ProductSection products={tree} />
          {/* div id="products" is in productSection.js */}
          <div className="HashTo" id="about"/>
          <AboutUsSection />
          <div className="HashTo" id="faq"/>
          <FaqSection />
          <div className="HashTo" id="contact" />
          <ContactSection />
    </div>
  );
}

export default Home;
