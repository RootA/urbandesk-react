import React from 'react';

const IntroSection: React.FC = () => (
    <section id="hero" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
            <h1>Build for creators by creators</h1>
            <h2>Creators, Inventors are meant to be paid for their work. We are here to help</h2>
            <a href="#about" className="btn-get-started scrollto">Start selling</a>
            <img src="assets/img/hero-img.png" className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="150"/>
        </div>
    </section>
);

export default IntroSection;