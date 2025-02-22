import React from "react";
import bg from './bg.mp4';
import Form from "../../components/form/Form";
import Button from "../../components/button/button";
function PostRide() {
  return (
      <div className= "main">  
      <div className="overlay"></div>
        <video src = {bg} autoPlay loop muted/>
        <div className="content">
          <Form/>
          <Button msg={"Go Ride"}/>
        </div>
    </div>
  );
}

export default PostRide;
