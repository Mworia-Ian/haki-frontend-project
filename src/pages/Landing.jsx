import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="mb-8 p-8 relative h-full w-full bg-gradient-to-br from-gray-900 to-gray-700">
        <p className="text-2xl text-center font-semibold text-white">Welcome to Haki</p>
        <div className="flex justify-center items-center mt-5">
        <TypeAnimation
          className="text-white text-center text-5xl"
          sequence={[
            "Get Access to Interllectual Property Lawyers",
            1000,
            "Get Access to Tax Lawyers",
            1000,
            "Get Access to Defense Lawyers",
            1000,
            "And many more...",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          speed={50}
          repeat={Infinity}
        />
      </div>
      </div>
     
      <div className="flex justify-center mt-20">
        <button
          type="button"
          className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-900 dark:hover:bg-gray-600 dark:focus:ring-gray-900"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
