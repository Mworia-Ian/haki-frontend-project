import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Home from "./pages/Home";
import Welcome from "./components/Welcome";
import Landing from "./pages/Landing";
import LawyerProfile from "./pages/LawyerProfile";
import LawyersGrid from "./pages/LawyersGrid";
import Login from "./pages/Login";
import ClientChat from "./pages/ClientChat";
import Subscription from "./pages/Subscription";
import { UserProvider } from './UserContext';
import { useState } from "react";

function App() {
  const [user, setUser] = useState(() => {
    const savedSession = localStorage.getItem('session');
    return savedSession ? JSON.parse(savedSession).user : null;
  });

  return (
    <UserProvider value={{ user, setUser }}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Landing />} />
            <Route path="/profile" element={<LawyerProfile />} />
            <Route path="/lawyers" element={<LawyersGrid />} />
            <Route path="/lawyers/:id" element={<LawyerProfile />} />
            <Route path="/clientchat" element={<ClientChat />} />
            <Route path="/subscriptions" element={<Subscription />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
