import React from 'react';
import { useNavigate } from 'react-router-dom';

const LawyersCard = ({ lawyer }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center w-full py-[1rem] px-1">
      <div className="w-auto max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <div className="w-[350px] bg-white border-b border-l border-cyan-400 rounded-lg shadow flex flex-col items-center mb-1 drop-shadow-2xl">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-60 h-60 mb-3 rounded-full shadow-lg mt-4"
              src={lawyer?.lawyer_details?.image}
              alt={`${lawyer?.firstname} ${lawyer?.lastname}`}
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '100%',
                objectFit: 'cover',
                background: '#040000d7',
              }}
            />
            <h5 className="mb-1 text-xl font-medium text-black">
              Name: {lawyer?.firstname} {lawyer?.lastname}
            </h5>
            <span className="text-xl text-black">
              Specialization: {lawyer?.lawyer_details?.specialization || 'Criminal Law'}
            </span>
            <span className="text-xl text-black">
              Years of experience: {lawyer?.lawyer_details?.years_of_experience || '10'} years
            </span>
            <span className="text-xl text-black">
              Rate: KES {lawyer?.lawyer_details?.rate_per_hour || '5,000'}/hour
            </span>
            <div className="flex mt-4 md:mt-6">
              <button
                onClick={() => navigate(`/lawyers/${lawyer.id}`, { state: { lawyerId: lawyer.id } })}
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyersCard;
