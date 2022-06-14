import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  function hamburgerMenu() {
    let x = document.getElementById("topNav--links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="topNav">
        <Link to="/">
          <img
            className="logo"
            src="https://i.imgur.com/oMl5LeX.png"
            alt="back to home page"
          />
        </Link>
      <div id="topNav--links">
        <Link to="/activity" onClick={props.getFilter} name="eat" >EAT</Link>
        <Link to="/activity" onClick={props.getFilter} name="drink">DRINK</Link>
        <Link to="/activity" onClick={props.getFilter} name="tour">TOUR</Link>
        <Link to="/activity" onClick={props.getFilter} name="play">PLAY</Link>
        <Link to="/activity" onClick={props.getFilter} name="shop">SHOP</Link>
        <Link to="/activity" onClick={props.getFilter} name="relax">RELAX</Link>
      </div>
      <button className="icon" onClick={hamburgerMenu}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
}

