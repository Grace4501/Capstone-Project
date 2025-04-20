import '../../styles/Business.css';
import {useState} from 'react'

import searchLogo from '../../resources/SearchLogo.png';
import companyLogo from '../../resources/CompanyLogo.png';
import homelogo from '../../resources/Home.png';
import userLogo from '../../resources/User.png';
import Appointments from '../../resources/Appointments.png'
import Folder from '../../resources/crm.png'
import Settings from '../../resources/Settings.png';
import B from '../../resources/B.png';

import BusinessHome from './BusinessHome.js';
import BusinessMyProfile from './BusinessMyProfile.js';
import BusinessAppointments from './BusinessAppointments.js';
import BusinessMyProjects from './BusinessMyProjects.js';
import BusinessSettings from './BusinessSettings.js';

export default function Business() {

 const [activeTab, setActiveTab] = useState("home");


    return (<div className="Business">
        {/* Navigation side bar */}
        <nav className="business-Nav">
            <ul>
                <img className="companyLogo" src={companyLogo} alt="CompanyLogo.png" />
                <li>
                    <img className="business-NavIcon" src={homelogo} />
                    <button onClick={() => setActiveTab("home")}>Home</button>
                </li>
                <li>
                    <img className="business-NavIcon" src={userLogo} />
                    <button onClick={() => setActiveTab("my-profile")}>My Profile</button>
                </li>
                <li>
                    <img className="business-NavIcon" src={Appointments}  />
                    <button onClick={() => setActiveTab("appointments")}>Appointments</button>
                </li>
                <li>
                    <img className="business-NavIcon" src={Folder}/>
                    <button onClick={() => setActiveTab("my-projects")}>My Projects</button>
                </li>
                <li>
                    <img className="business-NavIcon" src={Settings} />
                    <button onClick={() => setActiveTab("settings")}>Settings </button>
                </li>
            </ul>
        </nav>
      {/* Main content */}
      <div className="main-content">
        {activeTab === "home" && <BusinessHome />}
        {activeTab === "my-profile" && <BusinessMyProfile />}
        {activeTab === "appointments" && <BusinessAppointments />}
        {activeTab === "my-projects" && <BusinessMyProjects />}
        {activeTab === "settings" && <BusinessSettings />}
    </div>
        {/* Top div bar */}
        <div className="business-topDiv">
            <input type="search" placeholder='Search' />
            <img className="business-searchLogo" src={searchLogo}  />
            <span className="material-icons-outlined">help_outline</span>
            <span className="material-icons-outlined" style={{ border: 'none' }}>notifications</span>
            {/* Business Account */}
            <img src={B} />
        </div>

    </div>
    );
}