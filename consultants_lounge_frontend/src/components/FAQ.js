import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/FAQ.css";
import "../styles/headerFooter.css";

const FAQ = () => {
  const [FAQContent, setFAQContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQ, setFilteredFAQ] = useState([]);
  const firstResultRef = useRef(null);

  useEffect(() => {
    fetch("/FAQ-Content.json")
    .then((reponse) => reponse.json())
    .then((data) => {
      setFAQContent(data);
      setFilteredFAQ(data);
    })
    .catch((error) => console.error("Error loading FAQ content", error));
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredFAQ(FAQContent);
      return;
    }
  
    const lowerCaseQuery = searchQuery.toLowerCase();
  
    const filteredData = FAQContent.map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseQuery) ||
          item.text.toLowerCase().includes(lowerCaseQuery)
      ),
    })).filter((section) => section.items.length > 0);
  
    setFilteredFAQ(filteredData);
  }, [searchQuery, FAQContent]);  

    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth"});
    };

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  
    setTimeout(() => {
      if (firstResultRef.current) {
        firstResultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

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
            <li><Link to="/resources">RESOURCES</Link></li>
            <li><Link to="/FAQ" className="current">FAQ</Link></li>
            <li><Link to="/login" className="login">LOGIN</Link></li>
            <li><Link to="/signUp" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      
      {/* Search */}
      <div className="search">
        <h1>FAQ</h1>
        <p>What can we help you with?</p>
        <div className="search-container">
            <input 
              type="text" 
              placeholder="search" 
              className="search-landing"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <div className="search-icon-container" onClick={handleSearch}>
              <img src="resources/search-icon.png" className="search-icon" alt="search icon" />
            </div>
          </div>
          <img src="/resources/Detail2.png" className="detail1-FAQ" />
          <img src="/resources/Detail2.png" className="detail2-FAQ" />
      </div>


      {/* Quick links container */}
      <div className="quickLink-container">
        <div className="quickLinks">
          <h1>MEMBERSHIP</h1>
          <ul>
            <li onClick={() => scrollToSection("membership_1")}>How long does my membership last?</li>
            <li onClick={() => scrollToSection("membership_2")}>Can I cancel my membership?</li>
            <li onClick={() => scrollToSection("membership_3")}>Lorem ipsum dolor sit amet.</li>
            <li onClick={() => scrollToSection("membership_4")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>

        <div className="quickLinks">
          <h1>HOW IT WORKS</h1>
          <ul>
            <li onClick={() => scrollToSection("howItWorks_1")}>Can I hire more than one consultant for a project?</li>
            <li onClick={() => scrollToSection("howItWorks_2")}>Lorem ipsum.</li>
            <li onClick={() => scrollToSection("howItWorks_3")}>Lorem ipsum dolor sit amet, consectetur.</li>
            <li onClick={() => scrollToSection("howItWorks_4")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>

        <div className="quickLinks">
          <h1>PRICING & PAYMENT</h1>
          <ul>
            <li onClick={() => scrollToSection("pricingPayment_1")}>Do prices increase each year?</li>
            <li onClick={() => scrollToSection("pricingPayment_2")}>Are there every any discounts?</li>
            <li onClick={() => scrollToSection("pricingPayment_3")}>Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div className="quickLinks">
          <h1>TESTING AND SCREENING</h1>
          <ul>
            <li onClick={() => scrollToSection("testingScreening_1")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li onClick={() => scrollToSection("testingScreening_2")}>Lorem ipsum dolor sit amet.</li>
            <li onClick={() => scrollToSection("testingScreening_3")}>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
            <li onClick={() => scrollToSection("testingScreening_4")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>

        <div className="quickLinks">
          <h1>MANAGE ACCOUNT</h1>
          <ul>
            <li onClick={() => scrollToSection("manageAccount_1")}>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
            <li onClick={() => scrollToSection("manageAccount_2")}>Lorem ipsum dolor sit.</li>
            <li onClick={() => scrollToSection("manageAccount_3")}>Lorem ipsum dolor sit amet, consectetur.</li>
            <li onClick={() => scrollToSection("manageAccount_4")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>

        <div className="quickLinks">
          <h1>PRIVACY, SAFETY & LEGAL</h1>
          <ul>
            <li onClick={() => scrollToSection("privacySafetyLegal_1")}>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
            <li onClick={() => scrollToSection("privacySafetyLegal_2")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li onClick={() => scrollToSection("privacySafetyLegal_3")}>Lorem ipsum dolor sit amet, consectetur.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="FAQ-section">
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map(({ sectionTitle, items }, sectionIndex) => {
            const isFirstSection = sectionIndex === 0; // Attach ref to first section title

            return (
              <div key={sectionTitle} className="FAQ-category">
                <h2 
                  className="sectionTitle" 
                  ref={isFirstSection ? firstResultRef : null} // Attach ref to first matching section
                >
                  {sectionTitle}
                </h2>
                {items.map(({ id, title, text }) => (
                  <div key={id} id={id} className="FAQ-item">
                    <h3 className="itemTitle">{title}</h3>
                    <p className="itemParagraph">{text}</p>
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <p className="no-results">No results found</p>
        )}

      </div>

      {/* Filler */}
      <div className="filler">
        <h1 className="fillerText">Connecting Consultants with Small Businesses</h1>
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

export default FAQ;
