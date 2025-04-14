import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../styles/aboutUs.css";
import "../styles/headerFooter.css";
import LeadershipTeam from "./aboutUs-Leaders";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
        <img src="resources/CompanyLogo-White.png" className="logo" alt="company logo" />
        </div>
        <div className="pageList">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/aboutUs" className="current">ABOUT US</Link></li>
            <li><Link to="/howItWorks">HOW IT WORKS</Link></li>
            <li><Link to="/consultants">CONSULTANTS</Link></li>
            <li><Link to="/resources">RESOURCES</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/login" className="login">LOGIN</Link></li>
            <li><Link to="/signUp" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="whatDo">
        <div className="text-whatDo">
          <h1 className="title-whatDo">WHAT WE DO</h1>
          <p className="paragraph-whatDo">
            We make great work happen by connecting talent with small businesses. Sign up to find a consultant for your unique business needs.
          </p>
          <Link to="/signup" className="signup-whatDo">SIGN UP</Link>
        </div>
        <img className="img-whatDo" src="resources/aboutUs_section.png" alt="What we do" />
      </div>

      {/* Leadership Team Section */}
      <div className="leadership">
        <h1 className="title-leadership">Leadership Team</h1>
        <LeadershipTeam /> {/* Use the component instead of manipulating DOM */}
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="logo-list-container">
          <div className="footer-logo-container">
          <img src="resources/CompanyLogo-Blue.png" className="footer-logo" alt="company logo" />
          </div>

          <div className="footer-lists">
            <div className="companyList">
              <ul>
                <p><b>COMPANY</b></p>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><Link to="/howItWorks">How it Works</Link></li>
                <li><Link to="/consultants">Consultants</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/signUp" className="signupFooterBtn">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
