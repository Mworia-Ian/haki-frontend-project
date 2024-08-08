import React from 'react';
import { Link } from 'react-router-dom';

const LawyersCard = ({ lawyer }) => {
  const {
    image_url = 'url-to-image.jpg',
    name = 'John Doe',
    experience = '10',
    specialization = 'Criminal Law',
    rate_per_hour = '5,000',
    id = '1',
  } = lawyer;

  return (
    <div className="w-full max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 p-4 ml-10"
      style={{ background: 'linear-gradient(144deg, #1827f5, #131204 60%)' }}>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-60 h-60 mb-3 rounded-full shadow-lg mt-4"
          src={image_url}
          alt={name}
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '100%',
            objectFit: 'cover',
            background: '#e8e8e8',
          }}
        />
        <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
          Name: {name}
        </h5>
        <span className="text-xl text-white dark:text-gray-400">
          Specialization: {specialization}
        </span>
        <span className="text-xl text-black-900 dark:text-gray-400">
          Years of experience: {experience} years
        </span>
        <span className="text-xl text-black-500 dark:text-gray-400">
          Rate: KES {rate_per_hour}/hour
        </span>
        <div className="flex mt-4 md:mt-6">
          <Link
            to={`/lawyers/${id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyersCard;
