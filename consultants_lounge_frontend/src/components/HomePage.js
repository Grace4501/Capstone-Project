import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loadExperts } from './homePage-Experts';
import '../App.css';
import '../styles/homePage.css';
import '../styles/headerFooter.css';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadExperts();
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleToBusinessSurvey = () => {
    window.location.href = '/survey-Businesses';
  };

  const handleToConsultantSurvey = () => {
    window.location.href = '/survey-Consultant';
  };

  const handleScroll = (direction) => {
    const expertsContainer = document.getElementById('experts-container');
    const scrollAmount = 300;
    if (direction === 'right') {
      expertsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === 'left') {
      expertsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/consultants?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="homePage">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClosePopup}>x</button>
            <h1>SURVEY</h1>
            <p>Would you like to take part in our survey to let us know how we can help you better?</p>
            <div className="popup-btns">
              <button onClick={handleToBusinessSurvey} className="popup-btn primary">BUSINESS OWNERS</button>
              <button onClick={handleToConsultantSurvey} className="popup-btn secondary">CONSULTANTS</button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="header">
        <div className="logo-container">
          <img src="resources/CompanyLogo-White.png" className="logo" alt="company logo" />
        </div>

        <div className="pageList">
          <ul>
            <li><Link to="/" className="current" id="landingPage">HOME</Link></li>
            <li><Link to="/aboutUs" id="landingPage">ABOUT US</Link></li>
            <li><Link to="/howItWorks" id="landingPage">HOW IT WORKS</Link></li>
            <li><Link to="/consultants" id="landingPage">CONSULTANTS</Link></li>
            <li><Link to="/resources" id="landingPage">RESOURCES</Link></li>
            <li><Link to="/FAQ" id="landingPage">FAQ</Link></li>
            <li><Link to="/Login" className="login">LOGIN</Link></li>
            <li><Link to="/Signup" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      {/* Landing Section */}
      <div className="landing">
        <div className="text-landing">
          <h1 className="title-landing">BRINGING YOUR BUSINESS TO THE NEXT LEVEL</h1>
          <p className="paragraph-landing">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="search for a skill"
              className="search-landing"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <div className="search-icon-container" onClick={handleSearch}>
              <img src="resources/search-icon.png" className="search-icon" alt="search icon" />
            </div>
          </div>
        </div>
        <div className="img-landing">
          <img src="resources/landing_section.png" alt="Landing Section" />
        </div>
      </div>

      {/* How it Works Section */}
      <div className="howitworks">
        <div className="titleimg-howitworks">
          <h1 className="title-howitworks">HOW IT WORKS</h1>
          <img className="img-howitworks" src="/resources/howitworks_section.png" alt="How it works" />
        </div>

        <div className="text-howitworks">
          <div className="founding">
            <h1 className="numbering-founding">01</h1>
            <h1 className="title-founding">Founding Your Business</h1>
            <p className="paragraph-founding">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>
          <div className="expanding">
            <h1 className="numbering-founding">02</h1>
            <h1 className="title-founding">Expanding Your Business</h1>
            <p className="paragraph-founding">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>
          <div className="optimizing">
            <h1 className="numbering-optimizing">03</h1>
            <h1 className="title-optimizing">Optimizing Your Business</h1>
            <p className="paragraph-optimizing">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="companylogos">
        <img className="img-companylogos" src="resources/logo1.png" alt="Logo 1" />
        <img className="img-companylogos" src="resources/logo2.png" alt="Logo 2" />
        <img className="img-companylogos" src="resources/logo3.png" alt="Logo 3" />
        <img className="img-companylogos" src="resources/logo4.png" alt="Logo 4" />
        <img className="img-companylogos" src="resources/logo5.png" alt="Logo 5" />
      </div>

      {/* Consultant Section */}
      <div className="consultant">
        <div className="text-consultant">
          <h1 className="title-consultant">BECOME A CONSULTANT</h1>
          <p className="paragraph-consultant">Do you have the skills that can help a small business thrive?...</p>
          <Link to="/signup" className="signup-consultant">SIGN UP</Link>
        </div>
        <img className="img-consultant" src="resources/consultant_section.png" alt="Consultant Section" />
      </div>

      {/* Blog Section */}
      <div className="blog">
        <img className="img-blog" src="resources/consultant_section.png" alt="Blog Section" />
        <div className="text-blog">
          <h1 className="title-blog">VISIT THE BLOG</h1>
          <p className="paragraph-blog">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          <a href="https://blog.consultantslounge.com/" className='blog-btn' target="_blank" rel="noopener noreferrer">BLOG</a>
        </div>
      </div>

      {/* Experts Section */}
      <div className="findexpert">
        <h1 className="title-findexpert">FIND AN EXPERT</h1>
        <div className="experts-container" id="experts-container"></div>
        <div className="scroll-arrow-left">
          <span onClick={() => handleScroll('left')}>&#8592;</span>
        </div>
        <div className="scroll-arrow-right">
          <span onClick={() => handleScroll('right')}>&#8594;</span>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit...</p>
          <Link to="/signup" className="signupFooterBtn">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
