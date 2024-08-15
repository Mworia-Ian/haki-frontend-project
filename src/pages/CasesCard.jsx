import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CasesCard() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/home');
  };

  const [cards, setCards] = useState([]);
  const [activeToggleId, setActiveToggleId] = useState(null);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('session'));
    const token = session?.accessToken;

    fetch("http://localhost:5000/cases", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          // Check for duplicate IDs
          const ids = data.map(card => card.id);
          const uniqueIds = new Set(ids);
          if (ids.length !== uniqueIds.size) {
            console.warn('Duplicate IDs detected:', ids);
          }
          setCards(data);
        } else {
          console.error('Expected an array, but received:', data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleToggle = (id) => {
    setActiveToggleId(prevId => prevId === id ? null : id);
    console.log(`Toggled ID: ${id}, Active ID: ${activeToggleId}`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1
        className="text-4xl text-[#37B9F1] font-bold text-center mb-4 mt-2"
        style={{
          textDecoration: 'underline',
          textDecorationColor: 'black',
          textDecorationThickness: '5px',
          textUnderlineOffset: '8px',
        }}
      >
        CLIENT CASES
      </h1>
      <button
        onClick={handleBack}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300 mt-1 mb-3"
      >
        Back
      </button>
      <div className="grid grid-cols-1 gap-6">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div
              key={card.id || index}  // Use index as fallback if id is not available
              className="relative w-full h-75 bg-white border-b border-l border-cyan-400 rounded-lg shadow flex flex-row items-stretch drop-shadow-2xl"
            >
                      <div className="absolute top-2 right-2 flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={activeToggleId === card.id}
                    onChange={() => handleToggle(card.id)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#32a6d8]"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {activeToggleId === card.id ? 'Active' : 'Inactive'}
                  </span>
                </label>
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card?.user?.firstname} {card?.user?.lastname}
                </h5>
                <p className="mb-1 font-semibold text-black dark:text-gray-400">
                  Description: {card.description}
                </p>
                <p className="font-semibold text-black dark:text-white">
                  Court Date: {card.court_date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-black mt-10">
            <p>No cards found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CasesCard;
