import React,  { useState } from "react";
import { ReactComponent as ArrowDown } from "../Assets/ArrowDown.svg";
import { ReactComponent as Hamburger } from "../Assets/hamburger.svg";
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        AR Shakir
      </a>
        <Hamburger className="hamburger"
        onClick={() => {
         setIsNavExpanded(!isNavExpanded);
       }}/> 
      <div className={
          isNavExpanded ? "middle expanded" : "middle"}>
        <ul>
          <li className="dropdown">
              <p style={{ paddingRight: "10px", fontSize: "14px" }}>Product</p>
              <ArrowDown className="dropdown-icon"/>
          </li>
          <li className="dropdown">
              <p style={{ paddingRight: "10px", fontSize: "14px" }}>Template</p>
              <ArrowDown className="dropdown-icon"/>
          </li>
          <li>
            <p className="link">Blog</p>
          </li>
          <li>
            <p className="link">Pricing</p>
          </li>
        </ul>
      </div>
      <div className={
          isNavExpanded ? "left expanded" : "left"
      }>
        <p className="link">Sign In</p>

        <button className="purple-btn">Start Free</button>
      </div>
    </nav>
  );
}
