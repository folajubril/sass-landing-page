import React from "react";
import { ReactComponent as ServiceIllustration } from "../Assets/illustration3.svg";
export default function Products() {
  return (
    <div className="service-container">
      <div className="feature-right" style={{marginTop: '7rem',}}>
        <p className="feature-label">Our Feature</p>
        <h1 className="lead-text" style={{ paddingRight: '9rem '}}>
          All payments are linked to your Financy account
        </h1>
        <p style={{ fontWeight: "200", fontSize: "13px", lineHeight: "25px" }}>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.{" "}
        </p>
        <button className="purple-btn btn">Get Started</button>
      </div>
      <ServiceIllustration className="service-illustration"/>
    </div>
  );
}
