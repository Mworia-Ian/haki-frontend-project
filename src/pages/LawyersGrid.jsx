import React, { useState, useEffect } from 'react';
import LawyersCard from './LawyersCard';
import LawyerSearch from './LawyerSearch';
import Footer from '../components/Footer';

const LawyersGrid = () => {
  const [lawyers, setLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
        console.log(lawyers)
      })
      .catch((error) => console.error('Error fetching lawyers:', error));
  }, []);

  const filteredLawyers = lawyers.filter((lawyer) => {
    if (!lawyer || !lawyer['lawyer_details']) {
      return false;
    }
    return lawyer['lawyer_details']['specialization'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.firstname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="container mx-auto px-4">
      <h1 className="text-4xl text-[#37B9F1] font-bold text-center mb-4 mt-2" style={{
        textDecoration: 'underline',
        textDecorationColor: 'black',
        textDecorationThickness: '5px',
        textUnderlineOffset: '8px',
      }} > OUR LAWYERS </h1>

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
      <Footer />
    </>
  );
};

export default LawyersGrid;




