import React from "react";
import { ReactComponent as HeaderImage } from "../Assets/headerImage.svg";
import {ReactComponent as Play} from "../Assets/play.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="lead-text">
          Managing business payments has never been easier
        </h1>
        <p style={{fontWeight: "200", fontSize: '17px', lineHeight: '25px', maxWidth: '90%'}}>
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>
        <div className="actions">
          <button className="round-btn">Get Started</button>
          <div className="stream-action">
            <button className="play-btn">
            <Play style={{width: '15px'}}/>
            </button>
            <p>See How it Works</p>
          </div>
        </div>
      </div>
        <HeaderImage  className="header-right" />
    </div>
  );
}
