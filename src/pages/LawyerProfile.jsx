import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Review from './Review'; // Update the path if necessary

function LawyerProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lawyer } = location.state || {};
  const [showForm, setShowForm] = useState(false);

  if (!lawyer) {
    return <div>Lawyer not found</div>;
  }

  const [firstName, lastName] = lawyer.name.split(' ');

  const handleAddReviewClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-#c7c55b py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden relative drop-shadow-2xl"
      >
        <div className="md:flex relative">
          <div className="md:flex-shrink-0 pl-3 pt-14 relative">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-lg"
              src={lawyer.image_url}
              alt={lawyer.name}
            />
            <button
              onClick={() => navigate(-1)}
              className="absolute top-2 left-2 bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-2 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back
            </button>
          </div>
          <div className="p-14">
            <div
              className="uppercase tracking-wide text-2xl text-[#37B9F1] font-bold"
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
              <span className="text-[#37B9F1]">{lastName}</span>
            </h2>
            <p className="mt-4 text-xl text-[#37B9F1]">
              {lawyer.specialization} with {lawyer.experience} years of experience.
            </p>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="px-4 py-5 bg-[#37B9F1] shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-lg font-medium text-white truncate">
                  Years of Experience
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {lawyer.experience}
                </dd>
              </div>
              <div className="px-4 py-5 bg-[#37B9F1] shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-lg font-medium text-white truncate">
                  Specialization
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {lawyer.specialization}
                </dd>
              </div>
              <div className="px-4 py-5 bg-[#37B9F1] shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-lg font-medium text-white truncate">
                  Rate per Hour
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  KES {lawyer.rate_per_hour}
                </dd>
              </div>
            </dl>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => navigate('/clientchat')}
                className="bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-2 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contact Lawyer
              </button>
              <button
                onClick={handleAddReviewClick}
                className="bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-1 px-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Review
              </button>
            </div>
          </div>
        </div>
        {showForm && <Review key={lawyer.id} lawyerId={lawyer.id} setShowForm={setShowForm} />}
      </div>
    </div>
  );
}

export default LawyerProfile;
