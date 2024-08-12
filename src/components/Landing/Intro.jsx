import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  return (
    <div className="text-white bg-[#F2F5F5]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#242d2d] font-bold p-2 text-2xl">
          WELCOME TO HAKI
        </p>
        <img className="w-[100px] mx-auto my-4 rounded-xl drop-shadow-2xl" src="src/assets/images/Gavel--Streamline-Ux.png"/>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#37B9F1]">
          LEGAL SERVICES
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-2xl text-xl font-bold py-4 text-[#37B9F1]">
            Find Experts in
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#242d2d]"
            strings={["Tax Law", "Family Law", "Land Law", "Much More..."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#242d2d]">
          Let us help you find legal reps, tailored to your needs
        </p>
        <button onClick={() => navigate("/signup")} className="bg-[#37B9F1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;