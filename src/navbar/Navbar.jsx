import React from "react";
import { Link } from "react-router-dom";
import user from './user.jpg';
import logo from './logo.png';
import './Navbar.css'


function Navbar() {
  return (
<div className="flex justify-between items-center pa3 w-100 navbar">
  <img src={logo} alt="logo" className="circular-image grow pointer"/>
  <div className="flex items-center">
    <Link to='/signin' className="mr3">
      <h2 className="ma0 white grow">Sign-Out</h2>
    </Link>
    <div className="dropdown">
    <img src={user} alt="user" className="circular-image pointer grow"/>
    <ul>
    <li>Gintama</li>
    <li>Settings</li>
    <li>My Rides</li>
    </ul>
    </div>
  </div>


</div>

  );
}

export default Navbar;
