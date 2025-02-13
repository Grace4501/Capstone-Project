import logo from './logo.svg';
import './App.css';
import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';

import AboutUs from './components/aboutUs';
import HomePage from './components/HomePage';

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
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />

      </Routes>
    </div>
  );
}

export default App;
