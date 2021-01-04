import React from 'react';

const HeaderSection = () => (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
  
        <h1 className="logo mr-auto"><a href="index.html">UrbanDesk</a></h1>
        <a href="#asa" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
  
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li className="drop-down"><a href="#asa">Drop Down</a>
              <ul>
                <li><a href="#asa">Drop Down 1</a></li>
                <li className="drop-down"><a href="#asa">Deep Drop Down</a>
                  <ul>
                    <li><a href="#asa">Deep Drop Down 1</a></li>
                    <li><a href="#asa">Deep Drop Down 2</a></li>
                    <li><a href="#asa">Deep Drop Down 3</a></li>
                    <li><a href="#asa">Deep Drop Down 4</a></li>
                    <li><a href="#asa">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#asa">Drop Down 2</a></li>
                <li><a href="#asa">Drop Down 3</a></li>
                <li><a href="#asa">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
  
          </ul>
        </nav>
        <a href="#about" className="get-started-btn scrollto">Get Started</a>
  
      </div>
    </header>
);

export default HeaderSection;