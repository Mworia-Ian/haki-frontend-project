// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import LawyerProfile from './components/LawyerProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/lawyerprofile" element={<LawyerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;