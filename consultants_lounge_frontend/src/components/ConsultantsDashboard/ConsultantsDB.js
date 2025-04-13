import { BrowserRouter as Router, Route, Link, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './ConsultantsHome.js';
import Learning from './ConsultantsLearning.js';
import Appointments from './ConsultantsAppointments';
import Profile from './ConsultantsProfile.js';

import WorkRouter from './ConsultantsWork/WorkRouter.js';
import WorkInvites from './ConsultantsWork/WorkInvites.js'
import NewProjects from './ConsultantsWork/WorkNewProjects.js'
import CurrentProjects from './ConsultantsWork/WorkProjects.js'
import Reviews from './ConsultantsWork/WorkReviews.js'
import Invoices from './ConsultantsWork/WorkInvoices.js'
import ProjectHistory from './ConsultantsWork/WorkHistory.js'

import SettingsRouter from './ConsultantsSettings/SettingsRouter.js';
import SettingsAccount from './ConsultantsSettings/SettingsAccount.js'
import SettingsNotifications from './ConsultantsSettings/SettingsNotifications.js'
import SettingsPayment from './ConsultantsSettings/SettingsPayment.js'
import SettingsSecurity from './ConsultantsSettings/SettingsSecurity.js'

import searchLogo from '../../resources/SearchLogo.png';
import companyLogo from '../../resources/CompanyLogo.png';
import homeLogo from '../../resources/Home.png';
import userLogo from '../../resources/User.png';
import appointmentLogo from '../../resources/Appointments.png';
import workLogo from '../../resources/crm.png';
import learningLogo from '../../resources/Learning.png';
import settingsLogo from '../../resources/Settings.png';

function Consultants() {
  const location = useLocation();

  return (
    <div className="Consultants">
      {/* Navigation side bar */}
      <nav className="Nav">
        <ul>
          <img className="companyLogo" src={companyLogo} alt="Company Logo" />
          <li>
            <Link to="/" className={location.pathname === "/" ? "current" : ""}>
              <img className="navIcon" src={homeLogo} alt="Home Logo" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/ConsultantsProfile"
              className={location.pathname === "/ConsultantsProfile" ? "current" : ""}
            >
              <img className="navIcon" src={userLogo} alt="Profile Logo" />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/ConsultantsAppointments"
              className={location.pathname === "/ConsultantsAppointments" ? "current" : ""}
            >
              <img className="navIcon" src={appointmentLogo} alt="Appointments Logo" />
              Appointments
            </Link>
          </li>
          <li>
            <Link
              to="/ConsultantsWork"
              className={location.pathname.startsWith("/ConsultantsWork") ? "current" : ""}
            >
              <img className="navIcon" src={workLogo} alt="Work Logo" />
              My Work
            </Link>
          </li>
          <li>
            <Link
              to="/ConsultantsLearning"
              className={location.pathname === "/ConsultantsLearning" ? "current" : ""}
            >
              <img className="navIcon" src={learningLogo} alt="Learning Logo" />
              My Learning
            </Link>
          </li>
          <li>
            <Link
              to="/ConsultantsSettings"
              className={location.pathname.startsWith("/ConsultantsSettings") ? "current" : ""}
            >
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
        {/* Admin Account */}
        <p className="AdminAccount">A</p>
      </div>

      {/* Main content area with routes */}
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ConsultantsLearning" element={<Learning />} />
          <Route path="/ConsultantsAppointments" element={<Appointments />} />
          <Route path="/ConsultantsProfile" element={<Profile />} />
          <Route path="/ConsultantsWork" element={<Navigate to="/ConsultantsWork/invites" />} />
          <Route path="/ConsultantsWork/:tab" element={<WorkRouter />} />
          <Route path="/ConsultantsSettings" element={<Navigate to="/ConsultantsSettings/account" />} />
          <Route path="/ConsultantsSettings/:tab" element={<SettingsRouter />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Consultants />
    </Router>
  );
}
