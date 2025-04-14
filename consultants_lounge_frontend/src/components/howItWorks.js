import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../styles/howItWorks.css";
import "../styles/headerFooter.css";

const HowItWorks = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("Buyer");

  useEffect(() => {
    fetch("/HIW-Content.json")
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error("Error loading json", error));
  }, []);

  const activeSection = data.find(section => section.sectionTitle === activeTab);

  return (
    <div className="howItWorks">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <img src="resources/CompanyLogo-White.png" className="logo" alt="company logo" />
        </div>
        <div className="pageList">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/aboutUs">ABOUT US</Link></li>
            <li><Link to="/howItWorks" className="current">HOW IT WORKS</Link></li>
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
          <h1 className="title-whatDo">HOW IT WORKS</h1>
          <p className="paragraph-whatDo">
            We connect talent who are able to work by hour or by project with small businesses
          </p>
          <Link to="/signup" className="signup-whatDo">SIGN UP</Link>
        </div>
        <img className="img-whatDo" src="resources/HIW_section.png" alt="What we do" />
      </div>

      {/* Tabs Container */}
      <div className="hiw-tabs-container">
        <div className="hiw-tabs">
          <button
            className={activeTab === "Buyer" ? "active" : ""}
            onClick={() => setActiveTab("Buyer")}
          >
            Buyer
          </button>

          <button
            className={activeTab === "Consultant" ? "active" : ""}
            onClick={() => setActiveTab("Consultant")}
          >
            Consultant
          </button>
        </div>

        {/* Display active tab content */}
        <div className="hiw-content">
        <h1 className="hiw-heading">{activeSection?.heading}</h1>
          
          {activeSection?.items.map((item, index) => (
            <div key={index} className="hiw-step">
              <img src={item.image} alt={item.title} className="hiw-image" />
              <div className="hiw-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
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

export default HowItWorks;
