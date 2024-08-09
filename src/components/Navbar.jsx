import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white w-full sticky top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="src/assets/reshot-icon-justice-XH4D3B8RWF.svg"
              className="h-8"
              alt="Haki Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-black hover:text-blue-800">
              Haki
            </span>
          </div>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 text-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-white text-black">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-xl hover:text-blue-700 hover:scale-150 duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyers"
                  className="block py-2 px-3 text-xl hover:text-blue-700 hover:scale-150 duration-300"
                >
                  Lawyers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-xl hover:text-[#00636D] hover:scale-150 duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 text-xl hover:text-[#00636D] hover:scale-150 duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/subscribe"
                  className="block py-2 px-3 text-xl hover:text-[#00636D] hover:scale-150 duration-300"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
