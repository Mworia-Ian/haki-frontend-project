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
    </div>
  );
}

export default Home;
