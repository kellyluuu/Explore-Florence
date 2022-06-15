import React from 'react'
import { Link } from 'react-router-dom'
import Bot from '../bot/Bot';

export default function Splash(props) {
  return (
    <div className="splash--container">
        <img
          src="https://i.imgur.com/iFPkx9x.jpg"
          alt="The twilight of Florence in Tuscany, Italy"
          className="splash--pic"
          id="splash--image"
        />
      <div id="splash--text">
        <h5 className="splash--sectionTitle">Explore Florence</h5>
        <p className="splash--sectionDesc">
          Florence, the capital of Italy's Tuscany region, is home to many
          masterpieces of Renaissance art and architecture. Surrounded by gently
          rolling hills covered with farms, vineyards, and orchards, there is no
          shortage of activities for you to enjoy during your stay.
        </p>
        <Link to="/activity">
          <button>EXPLORE</button>
        </Link>
      </div>
      <Bot user={props.user} getFilter={props.getFilter}/>
    </div>
  );
}

