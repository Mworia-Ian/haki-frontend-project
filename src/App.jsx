import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';
import LawyerProfile from './pages/LawyerProfile';
import LawyersGrid from './pages/LawyersGrid';

const lawyers = [
  { id: 1, name: 'John Doe', experience: 10, specialization: 'Criminal Law', rate_per_hour: '5,000', image_url: 'https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=' },
  { id: 2, name: 'Jane Smith', experience: 8, specialization: 'Corporate Law', rate_per_hour: '6,000', image_url: 'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=' },
  { id: 3, name: 'James Brown', experience: 15, specialization: 'Family Law', rate_per_hour: '4,500', image_url: 'https://media.istockphoto.com/id/1182967311/photo/confident-smiling-young-african-businessman-looking-at-camera-in-office.jpg?s=612x612&w=0&k=20&c=OIKWgJqGRsU12EhryxZOpqKQ2eBd_buxLfqYHhh42_4=' },
  { id: 4, name: 'Lisa Ray', experience: 12, specialization: 'Intellectual Property', rate_per_hour: '7,000', image_url: 'https://media.istockphoto.com/id/1181860679/photo/studio-headshot-of-a-hispanic-woman-wearing-a-turtle-neck-pullover.jpg?s=612x612&w=0&k=20&c=VpNhmeN4Qj_YVghjCiq8_sDt6TNyJr_JSSUDBgi4txU=' },
  { id: 5, name: 'Michael White', experience: 9, specialization: 'Environmental Law', rate_per_hour: '5,500', image_url: 'https://media.istockphoto.com/id/1184187261/photo/portrait-of-cheerful-bearded-black-man-over-yellow-background.jpg?s=612x612&w=0&k=20&c=me77y_a3sfKKOauLJpMMQo3wctCyMTf9_PtQT6YLhN4=' },
  { id: 6, name: 'Emily Green', experience: 11, specialization: 'Real Estate Law', rate_per_hour: '6,500', image_url: 'https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=' },
  { id: 7, name: 'David Black', experience: 7, specialization: 'Tax Law', rate_per_hour: '5,200', image_url: '...' },
  { id: 8, name: 'Laura Blue', experience: 14, specialization: 'Health Law', rate_per_hour: '6,300', image_url: '...' },
  { id: 9, name: 'Chris Yellow', experience: 6, specialization: 'Labor Law', rate_per_hour: '4,800', image_url: '...' },
  { id: 10, name: 'Anna Purple', experience: 13, specialization: 'International Law', rate_per_hour: '7,100', image_url: '...' },
  { id: 11, name: 'Tom Orange', experience: 10, specialization: 'Bankruptcy Law', rate_per_hour: '5,700', image_url: '...' },
  { id: 12, name: 'Sarah Pink', experience: 5, specialization: 'Criminal Law', rate_per_hour: '5,300', image_url: '...' }
];

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
          <Route path="/lawyers" element={<LawyersGrid lawyers={lawyers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
