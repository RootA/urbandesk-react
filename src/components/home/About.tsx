import React from 'react';

const AboutSection: React.FC = () => (
    <section id="about" className="about">
    <div className="container">

      <div className="row no-gutters">
        <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-right">
          <div className="content">
            <h3>UrbanDesk helps you</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <a href="#about" className="about-btn">About us <i className="bx bx-chevron-right"></i></a>
          </div>
        </div>
        <div className="col-xl-7 d-flex align-items-stretch" data-aos="fade-left">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-receipt"></i>
                <h4>Work like a modern being</h4>
                <p>Escape the hustle and bustle, creative work at your pace</p>
              </div>
              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-cube-alt"></i>
                <h4>Work away from work</h4>
                <p>Take of your suit and tie, and let the work, work for you</p>
              </div>
              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-images"></i>
                <h4>Create a community</h4>
                <p>Let people see what you can do andd appreciate your creations</p>
              </div>
              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-shield"></i>
                <h4>Income</h4>
                <p>Get paaid for your craft. You deserve it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default AboutSection;