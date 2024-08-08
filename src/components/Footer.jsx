import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <div className="flex flex-col md:flex-column md:justify-between items-center">
          <ul className="flex flex-col md:flex-column md:items-center text-lg font-medium text-gray-500 dark:text-white">
            <li className="mb-2 md:mb-0 md:me-6">
              <Link to="/" className="md:hover:underline text-blue-700">
                Home
              </Link>
            </li>
            <li className="mb-2 md:mb-0 md:me-6">
              <Link to="/lawyers" className="md:hover:underline text-blue-700">
                Lawyers
              </Link>
            </li>
            <li className="mb-2 md:mb-0 md:me-6">
              <Link to="/about" className="md:hover:underline text-blue-700">
                About
              </Link>
            </li>
            <li className="mb-2 md:mb-0 md:me-6">
              <Link to="/privacy-policy" className="md:hover:underline text-blue-700">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2 md:mb-5">
              <Link to="/contact" className="md:hover:underline text-blue-700">
                Contact
              </Link>
            </li>
          </ul>
          <span className="text-lg text-gray-500 sm:text-center dark:text-white mt-4 md:mt-0">
            © 2024{" "}
            {/* <Link to="/" className="hover:underline"> */}
              Haki™
            {/* </Link> */}
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
