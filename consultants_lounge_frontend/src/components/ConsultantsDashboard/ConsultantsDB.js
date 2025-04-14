import {
  Route,
  Link,
  Routes,
  useLocation,
  Navigate
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Home from './ConsultantsHome.js';
import Learning from './ConsultantsLearning.js';
import Appointments from './ConsultantsAppointments';
import Profile from './ConsultantsProfile.js';

import WorkRouter from './ConsultantsWork/WorkRouter.js';
import SettingsRouter from './ConsultantsSettings/SettingsRouter.js';

import searchLogo from '../../resources/SearchLogo.png';
import companyLogo from '../../resources/CompanyLogo.png';
import homeLogo from '../../resources/Home.png';
import userLogo from '../../resources/User.png';
import appointmentLogo from '../../resources/Appointments.png';
import workLogo from '../../resources/crm.png';
import learningLogo from '../../resources/Learning.png';
import settingsLogo from '../../resources/Settings.png';

function ConsultantsDB() {
  const location = useLocation();

  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const accountRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setShowAccountDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="Consultants">
      {/* Navigation side bar */}
      <nav className="Nav">
        <ul>
          <img className="companyLogo" src={companyLogo} alt="Company Logo" />
          <li>
            <Link to="/Consultants/home" className={location.pathname === "/Consultants/home" ? "current" : ""}>
              <img className="navIcon" src={homeLogo} alt="Home Logo" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/Consultants/profile" className={location.pathname === "/Consultants/profile" ? "current" : ""}>
              <img className="navIcon" src={userLogo} alt="Profile Logo" />
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/Consultants/appointments" className={location.pathname === "/Consultants/appointments" ? "current" : ""}>
              <img className="navIcon" src={appointmentLogo} alt="Appointments Logo" />
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/Consultants/work/invites" className={location.pathname.startsWith("/Consultants/work") ? "current" : ""}>
              <img className="navIcon" src={workLogo} alt="Work Logo" />
              My Work
            </Link>
          </li>
          <li>
            <Link to="/Consultants/learning" className={location.pathname === "/Consultants/learning" ? "current" : ""}>
              <img className="navIcon" src={learningLogo} alt="Learning Logo" />
              My Learning
            </Link>
          </li>
          <li>
            <Link to="/Consultants/settings/account" className={location.pathname.startsWith("/Consultants/settings") ? "current" : ""}>
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
        <span className="material-icons-outlined" style={{ border: 'none' }}>notifications</span>

        {/* Account Dropdown */}
        <div className="icon-wrapper" ref={accountRef}>
          <p className="AdminAccount" onClick={() => setShowAccountDropdown(prev => !prev)}>A</p>
          {showAccountDropdown && (
            <div className="dropdown account-dropdown">
              <p>Help Centre</p>
              <hr />
              <p>Log Out</p>
            </div>
          )}
        </div>
      </div>

      {/* Main content area with routes */}
      <div className='main-content'>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="learning" element={<Learning />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="work" element={<Navigate to="work/invites" />} />
          <Route path="work/:tab" element={<WorkRouter />} />
          <Route path="settings" element={<Navigate to="settings/account" />} />
          <Route path="settings/:tab" element={<SettingsRouter />} />
        </Routes>
      </div>
    </div>
  );
}

export default ConsultantsDB;
