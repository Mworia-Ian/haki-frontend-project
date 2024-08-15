import React, { useState, useEffect } from 'react';
import LawyersCard from './LawyersCard';
import LawyerSearch from './LawyerSearch';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LawyersGrid = () => {
  const [lawyers, setLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/lawyers', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzQ1NDM3NSwianRpIjoiYzI0MmU0NWUtZGI0ZC00OGE1LWJlZGYtZDIyOTYwMzU2Yjk3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MywibmJmIjoxNzIzNDU0Mzc1LCJjc3JmIjoiYTdlNGJiMjEtODY4Ni00N2MyLWFjNTMtNmVmMzQwMjcxNWZmIiwiZXhwIjoxNzIzNTQwNzc1LCJyb2xlIjoiY2xpZW50In0.ZfDPAe3DTtFNcxq81tQQjiKvCCAowvt5InRQkd848WE"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLawyers(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching lawyers:', error));
  }, []);

  const filteredLawyers = lawyers.filter((lawyer) => {
    if (!lawyer || !lawyer.lawyer_details) {
      return false;
    }
    return lawyer.lawyer_details.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.firstname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleLogout = () => {
    localStorage.removeItem('session');
    navigate("/login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center h-24 mx-auto px-4 bg-[#F2F5F5] w-full mb-3">
        <h1 className="w-full text-3xl font-bold pl-7 text-[#37B9F1] hover:text-[#6ab6d6]">
          <a href="/">Haki</a>
        </h1>
        <ul className="flex text-[#37B9F1] pr-7">
          <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
            <a onClick={() => navigate("/home")}>Home</a>
          </li>
          <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
            <a onClick={() => navigate("/cases")}>Cases</a>
          </li>
          <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
            <a onClick={() => navigate("/history")}>History</a>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          type="button"
          className="text-white bg-[#37B9F1] text-xl hover:bg-[#40a8d4] focus:ring-4 focus:outline-none font-medium rounded-lg px-4 py-2 text-center mr-8"
        >
          Logout
        </button>
      </div>
      
      <main className="flex-grow container mx-auto px-4">      
        <LawyerSearch setSearchTerm={setSearchTerm} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer) => (
              <LawyersCard key={lawyer.id} lawyer={lawyer} />
            ))
          ) : (
            <div className="col-span-full text-center text-black mt-10">
              <p>Lawyer not found.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LawyersGrid;