import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Brands from "./components/brands";
import Feature from "./components/feature";
import SignUp from "./components/signUp";
import Products from "./components/products";
import Banner from "./components/banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="head-container">
        <Header />
      </div>
      <Brands />
      <div className="ft">
        <Feature />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <SignUp />
      </div>
      <div className="products" style={{}}>
        <Products />
      </div>
      <div className="bana" style={{display: 'flex', justifyContent: 'center'}}>
      <Banner  />
      </div>
      <div className="footer">
      <div className="footer-links">
        <div className="about-brand">
          <h3>AR Shakir</h3>
          <p className="about-subtext">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </div>
        <div className=" links">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className=" links">
          <h3>Product</h3>
          <p>Invoicing Platform</p>
          <p>Accounting Plateform</p>
          <p>Create Proposal</p>
          <p>Contracts</p>
        </div>
        <div className="links">
          <h3>Resources</h3>
          <p>Proposal Template</p>
          <p>Invoice Template</p>
          <p>Tuturoial</p>
          <p>How to write a contract</p>
        </div>
      </div>
      <hr style={{background: "#404444", width: '100%', height: '0.5px'}}/>
      <div className="copyrights">
        <p>
          2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
          Services
        </p>
        <p>Supported by Microsoft Startup</p>
      </div>
    </div>
    </div>
  );
}

export default App;
