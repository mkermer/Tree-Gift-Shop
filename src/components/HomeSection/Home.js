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
          <Col md={12}>
                        <h1>Little FAQ</h1>
                        <p>The answer to your question might be here!</p>
                    </Col>
                    <Col>
                        <FaqSection />
                    </Col>
          <ContactSection />
        </div>
    </div>
  );
}

export default Home;
