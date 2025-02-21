import React from "react";
import bg from './bg.mp4';
import Form from "../../components/form/Form";
function PostRide() {
  return (
      <div className= "main">  
      <div className="overlay"></div>
        <video src = {bg} autoPlay loop muted/>
        <div className="content">
      <h1 className="center gold">Post your Ride</h1>
      <div className="center list-container">
        <Form/>
      </div>
      </div>
    </div>
  );
}

export default PostRide;
