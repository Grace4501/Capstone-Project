import logo from './logo.svg';
import './App.css';
import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';

import AboutUs from './components/aboutUs';
import HomePage from './components/HomePage';
import SurveyConsultant from './components/survey-Consultant';
import SurveyBusinesses from './components/survey-Businesses';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/survey-Consultant">Survery-Consultant</Link>
          </li>
          <li>
            <Link to="/survey-Businesses">Survery-Businesses</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/survey-Consultant' element={<SurveyConsultant />} />
        <Route path='/survey-Businesses' element={<SurveyBusinesses />} />

      </Routes>
    </div>
  );
}

export default App;
