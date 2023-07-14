import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="logo_grey.png" alt="" />
        </div>
        <div className="links">
          <a className="link selected">About</a>
          <a className="link">Work</a>
          <a className="link">Skills</a>
          <a className="link">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
