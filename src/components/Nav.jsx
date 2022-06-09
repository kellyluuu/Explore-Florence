import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  function hamburgerMenu() {
    var x = document.getElementById("topNav--links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="topNav">
      <div id="topNav--home">
        <Link to="/">
          <img
            className="logo"
            src="https://i.imgur.com/oMl5LeX.png"
            alt="back to home page"
          />
        </Link>
      </div>
      <div id="topNav--links">
        <Link to="">EAT</Link>
        <Link to="">DRINK</Link>
        <Link to="">TOUR</Link>
        <Link to="">PLAY</Link>
        <Link to="">SHOP</Link>
        <Link to="">RELAX</Link>
      </div>
      <button className="icon" onClick={hamburgerMenu}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
}

