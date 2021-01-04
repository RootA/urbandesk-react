import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = () => (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
  
        <h1 className="logo mr-auto"><a href="/">UrbanDesk</a></h1>
        <a href="/" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
  
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="/">Home</a></li>
            <li><Link to="#about">Blog</Link></li>
            <li><Link to="#services">Features</Link></li>
            <li><Link to="#pricing">Pricing</Link></li>
            <li><Link to="#contact">Legal</Link></li>
  
          </ul>
        </nav>
        <a href="#about" className="get-started-btn scrollto">Start selling</a>
  
      </div>
    </header>
);

export default HeaderSection;