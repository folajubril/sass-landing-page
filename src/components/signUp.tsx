import React from "react";
import {ReactComponent as Birds} from '../Assets/vector1.svg'
export default function SignUp() {
  return (
    <div className="form-container">
      <div className="feature-right">
        <p className="feature-label">Our Feature</p>
        <h1 className="lead-text">Receive payments quickly from anywhere</h1>
        <p style={{ fontWeight: "200", fontSize: "13px", lineHeight: "25px" }}>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.{" "}
        </p>
      </div>
      <div className="left-container">
      <Birds className="form-illustration"/>
      <div className="form">
        <p className="form-name">Get Started for Free</p>
        <div className="form-group">
        <input className="form-input" placeholder="Email Address" />
        <input className="form-input" placeholder=" Password" />
        </div>
        <button className="orange-btn">Get Started</button>
      </div>
      </div>
    </div>
  );
}
