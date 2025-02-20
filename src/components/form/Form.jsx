import React from "react";
import './Form.css';
import {Link} from 'react-router-dom';
function Form() {
  return (
    <div>
    <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 green-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 center black">Ride Info</legend>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 black" htmlFor="destination-address">
                Destination Address:
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="destination-address"
                id="destination-address"
              />
            </div>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 black" htmlFor="arriving-time">
                Arriving Time To Destination:
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="time"
                name="arriving-time"
                id="arriving-time"
              />
            </div>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 black" htmlFor="date">
                Date:
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="date"
                name="date"
                id="date"
              />
            </div>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 black" htmlFor="pickup-location">
                Pickup Loction:
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="pickup-location"
                id="pickup-location"
              />
            </div>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 black" htmlFor="pickup-time">
                Pickup Time:
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="time"
                name="pickup-time"
                id="pickup-time"
              />
            </div>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 black" htmlFor="number_of_passengers">
                Number of Passengers:
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="number_of_passengers"
                id="number_of_passengers"
              />
            </div>
          </fieldset>
          </div>
      </main>
    </article>
</div>
  );
}

export default Form;
