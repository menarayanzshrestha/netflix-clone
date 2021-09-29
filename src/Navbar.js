import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedaia/commons/0/0f/"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twing.com/profile_images/124011999041155"
        alt="login"
      />
    </div>
  );
}

export default Navbar;
