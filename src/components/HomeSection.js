import React from "react";
import "../styles/HomeSection.css";

import { homeSectionApi } from "../api/homeSectionApi";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Fade } from "react-awesome-reveal";

function HomeSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 4.5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1400 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1400, min: 1200 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 1200, min: 900 },
      items: 1.5,
    },
    compactMobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1.5,
    },
  };

  return (
    <div className="home-section" id="home">
      <Fade direction="left">
        <div className="text">
          <p>future looks brights!</p>
        </div>
      </Fade>
      <Fade direction="right">
        <Carousel responsive={responsive} className="carousel-container">
          {homeSectionApi.map((item) => {
            return (
              <div className="item">
                <img
                  src={item.thumb}
                  height={397}
                  width={357}
                  className="thumb"
                ></img>
                <p className="name">{item.name}</p>
                <div className="price">
                  <p className="cur-price">{item.cur_price}</p>
                  <p className="prev-price">{item.prev_price}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Fade>
    </div>
  );
}

export default HomeSection;
