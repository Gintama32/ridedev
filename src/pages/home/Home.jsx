import React from "react";
import rides from "../../rides.json";
import "./Home.css"
import bg from '../../assets/bg.mp4';
function Home() {
  return (
      <div className= "main">
          <div className="overlay"></div>
        <video src = {bg} autoPlay loop muted/>
        <div className="content">
      <h1 className="center gold">Rides Needed</h1>
      <div className="center list-container">
      <ul>
        {rides.map((ride, index) => (
          <li key={index} className="br3 ma2 ba bw1 b--silver shadow-5 pointer grow mw500">
            <h3>{ride.name}</h3>
            <p>Destination: {ride.Destination}</p>
            <p>Date: {ride.Date}</p>
          </li>
        ))}
      </ul>
      </div>

      </div>
    </div>
  );
}

export default Home;
