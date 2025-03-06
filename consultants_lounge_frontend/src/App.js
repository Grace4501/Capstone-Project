import logo from './logo.svg';
import './App.css';
import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';

import AboutUs from './components/aboutUs';
import HomePage from './components/HomePage';
import SurveyConsultant from './components/survey-Consultant';
import SurveyBusinesses from './components/survey-Businesses';
import FAQ from './components/FAQ';
import Resources from './components/resources';


function App() {
  return (
    <div className="App">
      <nav>
        
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/survey-Consultant' element={<SurveyConsultant />} />
        <Route path='/survey-Businesses' element={<SurveyBusinesses />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/resources' element={<Resources />} />

      </Routes>
    </div>
  );
}

export default App;
