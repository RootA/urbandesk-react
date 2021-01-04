import React from 'react';
import HeaderSection  from '../partials/Header';
import FooterSection from '../partials/Footer';
import IntroSection from '../home/Intro';
import AboutSection from '../home/About';
import ServiceSection from '../home/Services';


const Home = () => (
    <>
    <HeaderSection/>
    <IntroSection/>
    <main id="main">
        <AboutSection/>
        <ServiceSection/>
    </main>
    <FooterSection/>
    </>
);

export default Home;