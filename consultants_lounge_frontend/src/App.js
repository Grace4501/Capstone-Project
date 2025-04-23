import './App.css';
import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';
import SignUp from './components/Signup.js';
import AboutUs from './components/aboutUs';
import HomePage from './components/HomePage';
import SurveyConsultant from './components/survey-Consultant';
import SurveyBusinesses from './components/survey-Businesses';
import FAQ from './components/FAQ';
import Resources from './components/resources';
import HowItWorks from './components/howItWorks';
import Consultants from './components/consultants';
import Login from './components/Login';
import ConsultantsDB from './components/ConsultantsDashboard/ConsultantsDB.js';
import Admin from './components/AdminDashboard/Admin.js';
import Business from './components/BusinessOwnerDashboard/Business.js'

function App() {
 
  return (
    <div className="App">
      {/*  <Admin/> */}
       {/* <Business/> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/survey-Consultant' element={<SurveyConsultant />} />
        <Route path='/survey-Businesses' element={<SurveyBusinesses />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/howItWorks' element={<HowItWorks />} />
        <Route path='/consultants' element={<Consultants />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Consultants/*' element={<ConsultantsDB />} />
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Business' element={<Business/>}/>  
      </Routes> 
    </div>
   );
 }

 export default App;
