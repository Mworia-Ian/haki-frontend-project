// src/pages/LawyerProfile.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LawyerProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lawyer } = location.state || {};

  if (!lawyer) {
    return <div>Lawyer not found</div>;
  }

  const [firstName, lastName] = lawyer.name.split(' ');

  return (
    <div className="min-h-screen bg-#c7c55b py-12 px-4 sm:px-6 lg:px-8 hover:scale-105 duration-300">
      <div
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden"
        style={{ background: 'linear-gradient(144deg, #1827f5, #131204 75%)' }}
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0 pl-3 pt-3">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-lg"
              src={lawyer.image_url}
              alt={lawyer.name}
            />
          </div>
          <div className="p-8">
            <div
              className="uppercase tracking-wide text-xl text-white font-bold"
              style={{
                textDecoration: 'underline',
                textDecorationColor: 'black',
                textDecorationThickness: '5px',
                textUnderlineOffset: '8px',
              }}
            >
              Lawyer Profile
            </div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              <span className="text-black">{firstName} </span>
              <span className="text-white">{lastName}</span>
            </h2>
            <p className="mt-4 text-lg text-white">
              {lawyer.specialization} with {lawyer.experience} years of experience.
            </p>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Years of Experience
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {lawyer.experience}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Specialization
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {lawyer.specialization}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Rate per Hour
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  KES {lawyer.rate_per_hour}
                </dd>
              </div>
            </dl>
            <div className="flex justify-between mt-8">
              <button
                onClick={() => navigate(-1)}
                className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Back
              </button>
              <button
                onClick={() => navigate('/chat')}
                className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contact Lawyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerProfile;
