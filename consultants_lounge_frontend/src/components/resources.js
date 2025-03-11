import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../styles/resources.css";
import "../styles/headerFooter.css";

const Resources = () => {
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
        <img src="resources/CompanyLogo-White.png" className="logo" alt="company logo" />
        </div>
        <div className="pageList">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/aboutUs">ABOUT US</Link></li>
            <li><Link to="/howItWorks">HOW IT WORKS</Link></li>
            <li><Link to="/consultants">CONSULTANTS</Link></li>
            <li><Link to="/resources" className="current">RESOURCES</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/login" className="login">LOGIN</Link></li>
            <li><Link to="/signUp" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

    {/* Search */}
    <div className="search">
            <h1>RESOURCES</h1>
            <p>What can we help you with?</p>
            <div className="search-container">
                <input type="text" placeholder="search" className="search-landing" />
                <div className="search-icon-container">
                <img src="resources/search-icon.png" className="search-icon" alt="search icon" />
                </div>
            </div>
            <img src="/resources/Detail2.png" className="detail1-resources" />
            <img src="/resources/Detail2.png" className="detail2-resources" />
            <img src="/resources/resourcesSearch1.png" className="detail3-resources" />
            <img src="/resources/resourcesSearch2.png" className="detail4-resources" />
        </div>

    {/* Resources content */}
    <div className="content">
        <div className="training-container">
            <div>
                <h1 className="contentTitle">TRAINING HUB</h1>
                <p className="contentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <img src="/resources/resources1_section.png" className="contentImg"></img>
        </div>

        <div className="grant-container">
            <div>
                <h1 className="contentTitle">GRANT RESOURCES</h1>
                <p className="contentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <img src="/resources/resources2_section.png" className="contentImg"></img>
        </div>

        <div className="grantAccess-container">
            <div>
                <h1 className="contentTitle">HOW TO ACCESS GRANTS</h1>
                <p className="contentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <img src="/resources/resources3_section.png" className="contentImg"></img>
        </div>

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

export default Resources;