import React from "react";
import "../styles/SignedCollectionSection.css";

import Sign from "../assets/img/pat-signature White 1.png";
import RedBook from "../assets/img/img (8).png";
import WhiteBook from "../assets/img/img (8).png";

import { Fade } from "react-awesome-reveal";

function SignedCollectionSection() {
  return (
    <div className="signed-collection-section" id="signedBooks">
      <div className="container">
        <div className="sub-section">
          <Fade direction="left">
            <div className="left-items">
              <p className="white">Patrick Bet-David's </p>
              <p className="red">
                Signed <br></br> Collection
              </p>
              <button>SHOP NOW</button>
              <div>
                <img src={Sign} className="sign-image"></img>
              </div>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="right-items">
              <img src={RedBook}></img>
              <img src={WhiteBook}></img>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default SignedCollectionSection;
