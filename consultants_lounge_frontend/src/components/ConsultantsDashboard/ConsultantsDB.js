import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './ConsultantsHome.js'

import searchLogo from  '../../resources/SearchLogo.png';
import companyLogo from '../../resources/CompanyLogo.png';
import homeLogo from '../../resources/Home.png';
import userLogo from '../../resources/User.png';
import appointmentLogo from '../../resources/Appointments.png';
import workLogo from '../../resources/crm.png';
import learningLogo from '../../resources/Learning.png';
import settingsLogo from '../../resources/Settings.png';


export default function Consultants() {
  return (
    <Router>
      <div className="Consultants">
              {/* Navigation side bar */}
        <nav className="Nav">
          <ul>
            <img className="companyLogo" src={companyLogo} alt="CompanyLogo.png" />
            <li> 
              <Link to="/" className='current'>
                <img className="navIcon" src={homeLogo} alt="Home Logo" />
                Home
              </Link>
            </li>
            <li> 
              <Link to="/ConsultantsProfile">
                <img className="navIcon" src={userLogo} alt="Profile Logo" />
                My Profile
              </Link>
            </li>
            <li> 
              <Link to="/ConsultantsAppointments">
                <img className="navIcon" src={appointmentLogo} alt="Appointments Logo" />
                Appointments
              </Link>
            </li>
            <li> 
              <Link to="/ConsultantsWork">
                <img className="navIcon" src={workLogo} alt="Work Logo" />
                My Work
              </Link>
            </li>
            <li> 
              <Link to="/ConsultantsLearning">
                <img className="navIcon" src={learningLogo} alt="Learning Logo" />
                My Learning
              </Link>
            </li>
            <li> 
              <Link to="/ConsultantsSettings">
                <img className="navIcon" src={settingsLogo} alt="Settings Logo" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
         {/* Top div bar */}
        <div className="topDiv">
        <div className="searchWrapper">
          <img className="searchLogo" src={searchLogo} alt="Search Logo" />
          <input type="search" placeholder="Search" />
        </div>
          <span className="material-icons-outlined">help_outline</span>
          <span className="material-icons-outlined" style={{border:'none'}}>notifications</span>
          {/* Admin-Account"*/}
          <p className="AdminAccount"> A </p>
        </div>
           {/* Main content area with routes*/}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}