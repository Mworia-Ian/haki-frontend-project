import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Home from "./pages/Home";
import Welcome from "./components/Welcome";
import Landing from "./pages/Landing";
import LawyerProfile from "./pages/LawyerProfile";
import LawyersGrid from "./pages/LawyersGrid";
import Login from "./pages/Login";
import ClientChat from "./pages/ClientChat";
import Subscription from "./pages/Subscription";
import CasesCard from "./pages/CasesCard"; // Use the correct path
import LawyerHome from './components/LawyerHome'; // Use the correct path
import Messaging from "./components/Messaging";
import { UserProvider } from './UserContext';

function App() {
  // Handle user session state
  const [user, setUser] = useState(() => {
    const savedSession = localStorage.getItem('session');
    return savedSession ? JSON.parse(savedSession).user : null;
  });

  return (
    <UserProvider value={{ user, setUser }}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            {/* User-related routes */}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lawyers" element={<LawyersGrid />} />
            <Route path="/lawyers/:id" element={<LawyerProfile />} />
            <Route path="/profile" element={<LawyerProfile />} />

            {/* Additional feature pages */}
            <Route path="/clientchat" element={<ClientChat />} />
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="/cases" element={<CasesCard />} />
            <Route path="/messaging" element={<Messaging />} />

            {/* New route added for LawyerHome */}
            <Route path="/lawyerhome" element={<LawyerHome />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
