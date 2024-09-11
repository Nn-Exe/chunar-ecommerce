import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Home from './components/Home';
import Live from './components/Live';
import Contacts from './components/Contacts';
//import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
