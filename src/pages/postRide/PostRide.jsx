import React from "react";
import bg from './bg.mp4';
import Form from "../../components/form/Form";
function PostRide() {
  return (
      <div className= "main">  
      <div className="overlay"></div>
        <video src = {bg} autoPlay loop muted/>
        <div className="content">
          <h1 className="center white mt5">Post your Ride</h1>
          <Form/>
        </div>
    </div>
  );
}

export default PostRide;
