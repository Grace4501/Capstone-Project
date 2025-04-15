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


// Dashboards
import Business from './components/BusinessOwnerDashboard/Business.js';
import Admin from './components/AdminDashboard/Admin.js';

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
        <Route path='/business' element={<Business />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
