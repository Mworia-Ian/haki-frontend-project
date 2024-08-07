import React from "react";
import { Link } from "react-router-dom";

const LawyersCard = ({ lawyer = {} }) => {
  const {
    image_url = "https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=",
    name = "John Doe",
    experience = "10",
    specialization = "Criminal Law",
    rate_per_hour = "5,000",
    id = "1",
  } = lawyer;

  return (
    <div className="w-full max-w-md h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 p-4 ml-4">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-40 h-40 mb-3 rounded-full shadow-lg mt-4"
          src={image_url}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {specialization}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {experience} years of experience
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
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
