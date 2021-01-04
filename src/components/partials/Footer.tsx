import React from 'react';

const FooterSection: React.FC = () => (
    <div>
    <footer id="footer">
        <div className="footer-top">

            <div className="container d-md-flex py-4">

            <div className="mr-md-auto text-center text-md-left">
                <div className="copyright">
                    &copy; Copyright <strong><span>UrbanDesk</span></strong>. All Rights Reserved
                </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#sds" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#sds" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#sds" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#sds" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#sds" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div></div>
    </footer>

    <a href="#sds" className="back-to-top"><i className="icofont-simple-up"></i></a>
    <div id="preloader"></div>
  </div>
);

export default FooterSection;