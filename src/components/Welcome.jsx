import React from "react";
import LOGIN_IMAGE from "../assets/images/LOGIN_IMAGE.jpg";

function Welcome() {
  return (
    <div
      className="hidden lg:flex w-full lg:w-1/2 bg-cover bg-center flex-col justify-center items-center relative h-screen"
      style={{ backgroundImage: `url(${LOGIN_IMAGE})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60">
        <div className="text-center p-6 md:p-12 max-w-xl md:max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Welcome to HAKI ⚖️
          </h1>
          <p className="text-base md:text-lg text-white mb-16 leading-relaxed">
            HAKI is a platform dedicated to connecting everyday citizens with credible and reliable legal representation
          </p>
          <p className="text-base md:text-lg text-white leading-relaxed">
            Your Trusted Partner
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
