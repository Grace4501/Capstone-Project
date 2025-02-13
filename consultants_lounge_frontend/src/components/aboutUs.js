import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import '../styles/aboutUs.css';
import '../styles/headerFooter.css';
import { loadleadership } from './aboutUs-Leaders';

const AboutUs = () => { // Change from HomePage to AboutUs
  useEffect(() => {
    loadleadership();
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <h1 className="logo" alt="Consultants Lounge Logo">Website Logo</h1>
        </div>
        <div className="pageList">
          <ul>
            <li><Link to="/" id="landingPage">HOME</Link></li>
            <li><Link to="/aboutUs" className="current" id="landingPage">ABOUT US</Link></li>
            <li><Link to="/howItWorks" id="landingPage">HOW IT WORKS</Link></li>
            <li><Link to="/consultants" id="landingPage">CONSULTANTS</Link></li>
            <li><Link to="/resources" id="landingPage">RESOURCES</Link></li>
            <li><Link to="/FAQ" id="landingPage">FAQ</Link></li>
            <li><Link to="/login" className="login">LOGIN</Link></li>
            <li><Link to="/signUp" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      {/* What we do Section */}
      <div className="whatDo">
        <div className="text-whatDo">
          <h1 className="title-whatDo">WHAT WE DO</h1>
          <p className="paragraph-whatDo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
          <Link to="/signup" className="signup-whatDo">SIGN UP</Link>
        </div>
        <img className="img-whatDo" src="resources/aboutUs_section.png" alt='search icon'/>
      </div>

      {/* Leadership Team Section */}
      <div className="leadership">
        <h1 className="title-leadership">Leadership Team</h1>
        <div className="leadership-container" id="leadership-container"></div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="logo-list-container">
          <div className="footer-logo-container">
            <h1 className="footer-logo">Website Logo</h1>
          </div>
          <div className="footer-lists">
            <div className="companyList">
              <ul>
                <p><b>COMPANY</b></p>
                <li><a href="aboutUs.html">About Us</a></li>
                <li><a href="howItWorks.html">How it Works</a></li>
                <li><a href="consultants.html">Consultants</a></li>
                <li><a href="resources.html">Resources</a></li>
                <li><a href="FAQ.html">FAQ</a></li>
              </ul>
            </div>

            <div className="servicesList">
              <ul>
                <p><b>SERVICES</b></p>
                <li>Business Strategy</li>
                <li>Marketing & Sales</li>
                <li>Operational Optimization</li>
                <li>Research & Analysis</li>
              </ul>
            </div>

            <div className="resourcesList">
              <ul>
                <p><b>RESOURCES</b></p>
                <li>Resources</li>
                <li>Resources</li>
                <li>Resources</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="signupFooter">
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
          <a href="signUp.html" className="signupFooterBtn">SIGN UP</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
