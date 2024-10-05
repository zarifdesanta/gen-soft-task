import React from "react";
import "../styles/MotoSection.css";

import Quotes from "../assets/Icon/quotes.svg";
import Person from "../assets/img/img (5).png";

import { Fade } from "react-awesome-reveal";

function MotoSection() {
  return (
    <div className="moto-section">
      <div className="container">
        <div className="sub-section">
          <Fade direction="left">
            <div className="left-items">
              <img src={Quotes}></img>
              <p>
                Our mission is to enlighten, entertain <br></br> and empower
                current and future <br></br> leaders around the world.
              </p>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="right-items">
              <img src={Person}></img>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default MotoSection;
