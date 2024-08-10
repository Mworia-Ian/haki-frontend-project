
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Login from './pages/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';
import LawyerProfile from './pages/LawyerProfile';
import LawyersGrid from './pages/LawyersGrid';
import Chat from './pages/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<LawyerProfile />} />
          <Route path="/lawyers" element={<LawyersGrid />} />
          <Route path="/lawyers/:id" element={<LawyerProfile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
