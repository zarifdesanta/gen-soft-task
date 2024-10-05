import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

import Logo from "../assets/Logo/Valuetainment.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    if (toggle) {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  useEffect(() => {
    toggleDropdown();
  }, [toggle]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="sub-section">
          <div className="left-items">
            <div>
              <img src={Logo}></img>
            </div>
            <p>VTMERCH</p>
          </div>
          <div className="right-items">
            <div className="menu-bar" onClick={() => setToggle(!toggle)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="dropdown">
              <div class="dropdown-content" id="dropdown-content">
                <a href="#home" onClick={() => setToggle(false)}>
                  Home
                </a>
                <a href="#bestSelling" onClick={() => setToggle(false)}>
                  Best selling
                </a>
                <a href="#signedBooks" onClick={() => setToggle(false)}>
                  Signed books
                </a>
                <a href="#contact" onClick={() => setToggle(false)}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
