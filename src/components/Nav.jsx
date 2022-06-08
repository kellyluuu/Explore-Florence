import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="topNav">
      <Link to="/">
        <img className="logo" src="https://i.imgur.com/RfFiwPF.png" alt="back to home page" />
      </Link>
    </div>
  );
}

