import React from 'react';
import tree from "../../tree.json";
import ProductSection from "../ProductSection/ProductSection";
import { Route } from "react-router-dom";
import {Col } from 'react-bootstrap';
import HeroSection from "../HomeSection/HeroSection";
import InfoSection from "../FaqSection/InfoSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import ContactSection from "../ContactFormSection/ContactSection";
import FaqSection from "../FaqSection/FaqSection";


function Home(props) {
  return (
    <div className="App">
        <div id="home">
          <HeroSection />
          <InfoSection />
          <ProductSection products={tree} />
          <AboutUsSection />
          <FaqSection />
          <ContactSection />
        </div>
    </div>
  );
}

export default Home;
