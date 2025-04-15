import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// General Pages
import HomePage from './components/HomePage';
import AboutUs from './components/aboutUs';
import SignUp from './components/Signup.js';
import Login from './components/Login';

// Surveys
import SurveyConsultant from './components/survey-Consultant';
import SurveyBusinesses from './components/survey-Businesses';

// Informational Pages
import FAQ from './components/FAQ';
import Resources from './components/resources';
import HowItWorks from './components/howItWorks';
import Consultants from './components/consultants';

// Dashboards
import Business from './components/BusinessOwnerDashboard/Business.js';
import Admin from './components/AdminDashboard/Admin.js';
import ConsultantsDB from './components/ConsultantsDashboard/ConsultantsDB.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/survey-consultant' element={<SurveyConsultant />} />
        <Route path='/survey-businesses' element={<SurveyBusinesses />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/consultants' element={<Consultants />} />
        <Route path='/business' element={<Business />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/consultants/*' element={<ConsultantsDB />} />
      </Routes>
    </div>
  );
}

export default App;
