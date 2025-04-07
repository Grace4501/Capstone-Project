import '../../styles/Admin.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './AdminHome.js'
import UserAccess from './UAC/UserAccessControls.js';
import CustomerService from './CS/CostumerService.js';
import Payments from './Payments.js';
import Analytics from './Analytics/Analytics.js';
import CRM from './CRM.js';
import searchLogo from  '../../resources/SearchLogo.png';
import companyLogo from '../../resources/CompanyLogo.png';
import homelogo from '../../resources/Home.png';
import analyticsLogo from '../../resources/Analytics.png';
import customerserviceLogo from '../../resources/CustomerService.png';
import paymentsLogo from '../../resources/Payments.png';
import userLogo from '../../resources/User.png';
import crmLogo from '../../resources/crm.png';


export default function Admin() {
  return (
    <Router>
      <div className="Admin">
              {/* Navigation side bar */}
        <nav className="Nav">
          <ul>
            <img className="companyLogo" src={companyLogo} alt="CompanyLogo.png" />
            <li> 
              <Link to="/">
                <img className="navIcon" src={homelogo} alt="Home Logo" />
                Home
              </Link>
            </li>
            <li> 
              <Link to="/user-access">
                <img className="navIcon" src={userLogo} alt="User Access Logo" />
                User Access Controls
              </Link>
            </li>
            <li> 
              <Link to="/customer-service">
                <img className="navIcon" src={customerserviceLogo} alt="Customer Service Logo" />
                Customer Service
              </Link>
            </li>
            <li> 
              <Link to="/payments">
                <img className="navIcon" src={paymentsLogo} alt="Payments Logo" />
                Payments
              </Link>
            </li>
            <li> 
              <Link to="/analytics">
                <img className="navIcon" src={analyticsLogo} alt="Analytics Logo" />
                Analytics
              </Link>
            </li>
            <li> 
              <Link to="/CRM">
                <img className="navIcon" src={crmLogo} alt="CRM Logo" />
                CRM
              </Link>
            </li>
          </ul>
        </nav>
         {/* Top div bar */}
        <div className="topDiv">
          <input type="search"  placeholder='Search'/>
          <img className="searchLogo" src={searchLogo} alt="SearchLogo.png"/> 
          <span className="material-icons-outlined">help_outline</span>
          <span className="material-icons-outlined" style={{border:'none'}}>notifications</span>
          {/* Admin-Account"*/}
          <p className="AdminAccount"> A </p>
        </div>
           {/* Main content area with routes*/}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-access/*" element={<UserAccess />} />
            <Route path="/customer-service/*" element={<CustomerService />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/CRM" element={<CRM />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}