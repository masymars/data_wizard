import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink , Routes} from 'react-router-dom';
import Page1 from './pages/about';
import Page2 from './pages/p';
import Home from './pages/Home';
import './index.css';

function App() {
  // ... (your existing useState hooks, event handlers, and functions)

  return (
    <Router>
      <div className="Apps">
      <div className="container">
      

        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div></div>
    </Router>
  );
}

export default App;