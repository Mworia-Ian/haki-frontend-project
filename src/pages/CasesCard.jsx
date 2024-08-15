import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CasesCard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  const [cards, setCards] = useState([]);

  const [toggleStates, setToggleStates] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/cases", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzY2NDg4OCwianRpIjoiYTlhNzNhNjQtMTgxYi00YWYwLWIwYzEtNDc0ZDVjZGE2Mzk4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MiwibmJmIjoxNzIzNjY0ODg4LCJjc3JmIjoiOGM5Yjc2ZjctNTUwYS00YWI1LWIwZmMtNzQ5ZGVlZmQ2ZjE0IiwiZXhwIjoxNzIzNzUxMjg4LCJyb2xlIjoibGF3eWVyIn0.oBvLrtsprVRkeolpYzaT8BHo3V36-FggLBeMQ8CzLHk"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);  // Inspect the fetched data
        if (Array.isArray(data)) {
          setCards(data);
          const initialToggleStates = data.reduce((acc, card) => {
            acc[card.id] = false;
            return acc;
          }, {});
          setToggleStates(initialToggleStates);
        } else {
          console.error('Expected an array, but received:', data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  const handleToggle = (id) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
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
          cards.map((card) => (
            <div
              key={card.id}
              className="relative w-full h-75 bg-white border-b border-l border-cyan-400 rounded-lg shadow flex flex-row items-stretch drop-shadow-2xl"
            >
              <div className="absolute top-2 right-2 flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={toggleStates[card.id]}
                    onChange={() => handleToggle(card.id)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#32a6d8]"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {toggleStates[card.id] ? 'Active' : 'Inactive'}
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
                <p className="font-semibold text-black dark:text-white">
                  Status: {card.status} {/* Displaying the case status */}
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
