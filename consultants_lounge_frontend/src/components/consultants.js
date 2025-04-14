import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { loadExperts } from './homePage-Experts';
import '../App.css';
import '../styles/consultants.css';
import '../styles/headerFooter.css';

const Consultants = () => {
    const [consultants, setConsultants] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const consultantsListRef = useRef(null);
    const location = useLocation();

    const handleSearch = () => {
        setSearchQuery(searchQuery.trim());

        const newParams = new URLSearchParams();
        newParams.set('search', searchQuery.trim());
        window.history.replaceState(null, '', `?${newParams.toString()}`);

        setTimeout(() => {
            if(consultantsListRef.current) {
                consultantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
            }
        }, 100);
      };      
  
    useEffect(() => {
      loadExperts();
      fetch('/staticExperts.json')
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.error('Error loading consultants data:', error));

        const params = new URLSearchParams(location.search);
        const queryFromURL = params.get('search') || '';
        setSearchQuery(queryFromURL);
    }, [location.search]);

    const filteredConsultants = consultants.filter(consultant => 
        consultant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        consultant.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  return (
    <div className="App">

      {/* Header Section */}
      <div className="header">
        <div className="logo-container">
        <img src="resources/CompanyLogo-White.png" className="logo" alt="company logo" />
        </div>

        <div className="pageList">
          <ul>
            <li><Link to="/" id="landingPage">HOME</Link></li>
            <li><Link to="/aboutUs" id="landingPage">ABOUT US</Link></li>
            <li><Link to="/howItWorks" id="landingPage">HOW IT WORKS</Link></li>
            <li><Link to="/consultants" className="current" id="landingPage">CONSULTANTS</Link></li>
            <li><Link to="/resources" id="landingPage">RESOURCES</Link></li>
            <li><Link to="/FAQ" id="landingPage">FAQ</Link></li>
            <li><Link to="/login" className="login">LOGIN</Link></li>
            <li><Link to="/signUp" className="signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      {/* Search Section */}
      <div className="consultants-search">
        <div className="consultants-text">
          <h1 className="consultants-title">FIND A CONSULTANT AND GROW YOUR BUSINESS</h1>
          <p className="consultants-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis </p>
          <div className="search-container">
            <input
                type="text" 
                placeholder="ux/ui designer" 
                className="search-landing"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
            />
            <div className="search-icon-container" onClick={handleSearch}>
              <img src="resources/search-icon.png" className="search-icon" alt="search icon" />
            </div>
          </div>
        </div>
        <div className="consultants-img">
          <img src="resources/consultants_section.png" alt="Consultants Section" />
        </div>
      </div>

      {/* Consultant List Section */}
      <h2 className="consultants-list-title">OUR TALENT</h2>

      <div className="consultants-list">
        {filteredConsultants.length > 0 ? (
            filteredConsultants.map((consultant, index) => (
                <div 
                    className="consultant-card" 
                    key={index}
                    ref={index === 0 ? consultantsListRef : null}
                >

                <img src={consultant.image} alt={consultant.name} className="consultant-image" />
                
                <div className="consultant-info">
                    <h3 className="consultant-name">{consultant.name}</h3>
                    <p className="consultant-title">{consultant.title}</p>
                    <p className="consultant-description">{consultant.description}</p>
                </div>

                </div>
            ))
        ) : (
            <p className='no-results'>No results found</p>
        )}
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


export default Consultants;