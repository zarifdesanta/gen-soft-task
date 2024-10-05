import React from "react";
import "../styles/BestSellingSection.css";
import { bestSellingSectionApi } from "../api/bestSellingSectionApi";

import { Fade } from "react-awesome-reveal";

function BestSellingSection() {
  return (
    <div>
      <div className="best-selling-section" id="bestSelling">
        <div className="container">
          <Fade direction="left">
            <div className="text">
              <p>
                Buy 1 get 1 Free <br></br> on <span>best selling products</span>
              </p>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="item-grid">
              {bestSellingSectionApi.map((item) => {
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
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default BestSellingSection;
