import React, { useState, useEffect } from 'react';
import LawyersCard from './LawyersCard';
import LawyerSearch from './LawyerSearch';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LawyersGrid = () => {
  const [lawyers, setLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const session = JSON.parse(localStorage.getItem('session'));
  const token = session?.accessToken;
  useEffect(() => {
    fetch('http://localhost:5000/lawyers', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); 
        setLawyers(data);
      })
      .catch((error) => console.error('Error fetching lawyers:', error));
  }, []);

  const filteredLawyers = lawyers.filter((lawyer) => {
    if (!lawyer || !lawyer.lawyer_details) {
      return false;
    }
    return (
      lawyer.lawyer_details.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLogout = () => {
    localStorage.removeItem('session');
    navigate("/login");
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-[#37B9F1] font-bold text-center mb-4 mt-2" style={{
          textDecoration: 'underline',
          textDecorationColor: 'black',
          textDecorationThickness: '5px',
          textUnderlineOffset: '8px',
        }}>OUR LAWYERS</h1>
        <div className="flex justify-between items-center h-24 mx-auto px-4 bg-[#F2F5F5] w-full mb-3">
          <h1 className="w-full text-3xl font-bold pl-7 text-[#37B9F1] hover:text-[#6ab6d6]">
            <a href="#">Haki</a>
          </h1>
          <ul className="flex text-[#37B9F1] pr-7">
            <a onClick={() => navigate("/home")}>
              <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">Home</li>
            </a>
            <a onClick={() => navigate("/cases")}>
              <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">Cases</li>
            </a>
            <a onClick={() => navigate("")}>
              <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">History</li>
            </a>
          </ul>
          <button
            onClick={handleLogout}
            type="button"
            className="text-white bg-[#37B9F1] text-xl hover:bg-[#40a8d4] focus:ring-4 focus:outline-none font-medium rounded-lg px-4 py-2 text-center mr-8"
          >
            Logout
          </button>
        </div>
        <div className="container mx-auto px-4">
          <LawyerSearch setSearchTerm={setSearchTerm} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lawyers.length > 0 ? (
              filteredLawyers.map((lawyer) => (
                <div key={lawyer.id} className="mb-4">
                  <LawyersCard lawyer={lawyer} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-black mt-10">
                <p>Lawyer not found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LawyersGrid;
