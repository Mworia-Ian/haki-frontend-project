import React, { useState, useEffect } from 'react';
import LawyersCard from './LawyersCard';
import LawyerSearch from './LawyerSearch';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../utils';

const LawyersGrid = () => {
  const [lawyers, setLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);  // Added loading state
  const navigate = useNavigate();

  const session = JSON.parse(localStorage.getItem('session'));
  const token = session?.accessToken;

  useEffect(() => {
    fetch(`${SERVER_URL}/lawyers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setLawyers(data);
        setLoading(false);  // Data fetched, set loading to false
      })
      .catch((error) => {
        console.error('Error fetching lawyers:', error);
        setLoading(false);  // Handle error, set loading to false
      });
  }, [token]);

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
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;  // Display a loading message while fetching
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24 mx-auto px-4 bg-[#F2F5F5] w-full mb-3">
          <h1 className="w-full text-3xl font-bold pl-7 text-[#37B9F1] hover:text-[#6ab6d6]">
            <a href="#">Haki</a>
          </h1>
          <ul className="flex text-[#37B9F1] pr-7">
            <a onClick={() => navigate('/home')}>
              <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">Home</li>
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
            {filteredLawyers.length > 0 && (
              filteredLawyers.map((lawyer) => (
                <div key={lawyer.id} className="mb-4">
                  <LawyersCard lawyer={lawyer} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LawyersGrid;
