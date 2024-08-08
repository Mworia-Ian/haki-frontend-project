import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  const user = { name: "John Doe", role: "client" };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex min-h-screen items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="mb-4 text-2xl font-bold text-center text-blue-700">
            Welcome, {user.name}!
          </h1>
          {user.role === "lawyer" ? (
            <p>You can manage your clients and provide legal services.</p>
          ) : (
            <p>
              Thank you for choosing us to be your partner in your journey to find
              credible and reliable legal representation! <br />
              <em className="font-bold">Here you can find and hire legal experts.</em>
            </p>
          )}
        </div>
      </div>

      <footer className="bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-white">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Haki™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
