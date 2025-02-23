import React from "react";
import { Link } from "react-router-dom";
import user from './user.jpg';
import logo from './logo.png';
import './Navbar.css'

function Navbar() {
  return (
<div className="flex justify-between items-center pa3 w-100 navbar">
  <Link to = "/">
  <img src={logo} alt="logo" className="circular-image grow pointer"/>
  </Link>
  <div className="flex items-center">
    <Link to='/signin' className="mr3">
      <h2 className="ma0 gold grow">Sign-Out</h2>
    </Link>
    <div className="dropdown">
    <img src={user} alt="user" className="circular-image pointer grow"/>
    <ul>
    <li>Gintama</li>
    <Link to="/postride">
    <li>Post a ride</li>
    </Link>
    <Link to="/myride">
    <li>My Rides</li>
    </Link>
    </ul>
    </div>
  </div>


</div>

  );
}

export default Navbar;
