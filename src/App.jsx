import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';
import LawyerProfile from './pages/LawyerProfile';
import LawyersGrid from './pages/LawyersGrid';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/profile" element={<LawyerProfile />} />
          <Route path="/lawyers" element={<LawyersGrid />} />
          <Route path="/lawyers/:id" element={<LawyerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
