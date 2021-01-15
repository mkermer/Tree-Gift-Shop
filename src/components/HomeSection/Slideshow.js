import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slideshow.css";
import { Link } from "react-router-dom";

import { ReactComponent as TeamSpirit } from '../../illustrations/undraw_team_spirit_hrr4.svg';


function Slideshow() {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          <TeamSpirit width={700}/>
          <Carousel.Caption>
            <h3>About us</h3>
            <Link to="/about">
              <button className="slider-button">Click</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images2.alphacoders.com/103/1036023.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperboat.com/wp-content/uploads/2019/12/foggy-forest-01.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
