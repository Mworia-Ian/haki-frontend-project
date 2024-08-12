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
    <div className="flex items-center w-full py-[1rem] px-1">
      <div className="w-auto max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <div className="w-[350px] bg-white border-b border-l border-cyan-400 rounded-lg shadow flex flex-col items-center mb-1 drop-shadow-2xl">
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
                background: '#040000d7',
              }}
            />
            <h5 className="text-xl font-medium text-[#242d2d]">
              <b>Name:</b>  {name}
            </h5>
            <span className="text-xl text-[#242d2d] ">
              <b>Specialization: </b> {specialization}
            </span>
            <span className="text-xl text-[#242d2d]">
              <b>Years of experience:</b>  {experience} years
            </span>
            <span className="text-xl text-[#242d2d]">
              <b>Rate:</b>  KES {rate_per_hour}/hour
            </span>
            <div className="flex mt-4 md:mt-6">
              <Link
                to={`/lawyers/${id}`}
                state={{ lawyer }}
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyersCard;
