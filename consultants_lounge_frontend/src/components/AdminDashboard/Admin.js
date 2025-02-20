import './Admin.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home.js'
import UserAccess from './UserAccessControls.js';
import CustomerService from './CS/CostumerService.js';
import Payments from './Payments.js';
import Analytics from './Analytics/Analytics.js';
import CRM from './CRM.js';
import SearchLogo from  '../../resources/SearchLogo.png';

export default function Admin() {
  return (
    <Router>
      <div className="Admin">
        <nav className="Nav">
          <ul>
            <h3> Company </h3>
            <h5> Logo </h5>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/user-access"> User Access Controls </Link>  </li>
            <li> <Link to="/customer-service"> Customer Service </Link>  </li>
            <li> <Link to="/payments"> Payments </Link> </li>
            <li> <Link to="/analytics"> Analytics </Link>  </li>
            <li> <Link to="/CRM"> CRM </Link>  </li>
          </ul>
        </nav>
        {/* top div */}
        <div className="topDiv">
        <img src={SearchLogo}/>
          <input type="search"  placeholder='Search'/>
          <p> image </p>
          <p> image </p>
          <p> image </p>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-access" element={<UserAccess />} />
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