
import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';
import '../styles/headerFooter.css';
import { loadExperts } from './homePage-Experts';

const HomePage = () => {
  useEffect(() => {
    loadExperts();
  }, []);

  const handleScroll = (direction) => {
    const expertsContainer = document.getElementById('experts-container');
    const scrollAmount = 300;
    if (direction === 'right') {
      expertsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === 'left') {
      expertsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="App">
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
            <li><Link to="/login" className="login">LOGIN</Link></li>
            <li><Link to="/signUp" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      {/* Landing Section */}
      <div className="landing">
        <div className="text-landing">
          <h1 className="title-landing">BRINGING YOUR BUSINESS TO THE NEXT LEVEL</h1>
          <p className="paragraph-landing">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis </p>
          <div className="search-container">
            <input type="text" placeholder="search for a skill" className="search-landing" />
            <div className="search-icon-container">
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
            <p className="paragraph-founding">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
          </div>
          <div className="expanding">
            <h1 className="numbering-founding">02</h1>
            <h1 className="title-founding">Expanding Your Business</h1>
            <p className="paragraph-founding">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
          </div>
          <div className="optimizing">
            <h1 className="numbering-optimizing">03</h1>
            <h1 className="title-optimizing">Optimizing Your Business</h1>
            <p className="paragraph-optimizing">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="companylogos">
        <img className="img-companylogos" src="resources/logo1.png" alt="Logo 1" />
        <img className="img-companylogos" src="resources/logo2.png" alt="Logo 2" />
        <img className="img-companylogos" src="resources/logo3.png" alt="Logo 3" />
        <img className="img-companylogos" src="resources/logo4.png" alt="Logo 4" />
        <img className="img-companylogos" src="resources/logo5.png" alt="Logo 5" />
      </div>

      {/* Become a Consultant Section */}
      <div className="consultant">
        <div className="text-consultant">
          <h1 className="title-consultant">BECOME A CONSULTANT</h1>
          <p className="paragraph-consultant">Do you have the skills that can help a small business thrive? Become a consultant and earn from your very own fine-tune set of skills. Work wherever suits you, choose a full-time, part-time, or flexi-time project.</p>
          <Link to="/signUp" className="signup-consultant">SIGN UP</Link>
        </div>
        <img className="img-consultant" src="resources/consultant_section.png" alt="Consultant Section" />
      </div>

      {/* Find an Expert Section */}
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

      {/* Footer Section */}
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
          <Link to="/signUp" className="signupFooterBtn">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};


export default HomePage;