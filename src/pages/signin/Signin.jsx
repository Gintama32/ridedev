import React from "react";
import './Signin.css';
import {Link} from 'react-router-dom';
import bg from "../../assets/bg.png"
function Signin() {
  return (
    <div className="background">
      <div className="form">
    <article className="br3 shadow-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 green-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 center gold">Sign In</legend>
            <div className="mt3" >
              <label className="db fw6 lh-copy f6 gold" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100"
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
                className="b pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="center">
            <Link to ="/">
            <input
              className="b ph3 pv2 input-reset ba bg-black grow pointer f5 dib gold"
              type="button"
              value="Sign in"
            />
            </Link>
          </div>
          <div className="lh-copy mt3 center">
            <p
              className="f5 dim black db pointer"
            >
                <Link to="/register" className="gold">
              Register
              </Link>
            </p>
          </div>
        </div>
      </main>
    </article>
    </div>
    </div>
  );
}

export default Signin;
