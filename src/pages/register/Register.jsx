import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg.png"
import "./Register.css";
function Register() {
  return (
    <div className="background">
    <div className="form">
    <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 gold">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 gold" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 gold" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 gold" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div>
            <Link to="/signin">
            <input
              className="b ph3 pv2 input-reset ba bg-black grow pointer f6 dib gold"
              type="button"
              value="Register"
            />
            </Link>
          </div>
        </div>
      </main>
    </article>
    </div>
    </div>
  );
}

export default Register;
