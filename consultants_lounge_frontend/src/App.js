

import Admin from './components/AdminDashboard/Admin.js';
import './App.css';
import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';
import SignUp from './components/Signup.js';
import AboutUs from './components/aboutUs';
import HomePage from './components/HomePage';
import SurveyConsultant from './components/survey-Consultant';
import SurveyBusinesses from './components/survey-Businesses';
import Login from './components/Login';




import BusinessHome from './components/BusinessOwnerDashboard/BusinessHome.js';
import BusinessMyProfile from './components/BusinessOwnerDashboard/BusinessMyProfile.js';
import BusinessSettings from './components/BusinessOwnerDashboard/BusinessSettings.js';
import BusinessMyProjects from './components/BusinessOwnerDashboard/BusinessMyProjects.js';
import BusinessAppointments from './components/BusinessOwnerDashboard/BusinessAppointments.js';
function App() {

  return (
    <div>
      <BusinessAppointments/>
     {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/survey-Consultant' element={<SurveyConsultant />} />
        <Route path='/survey-Businesses' element={<SurveyBusinesses />} />
        <Route path='/Login' element={<Login />} />
      </Routes>  */}
    </div>  
  );
}

export default App;
