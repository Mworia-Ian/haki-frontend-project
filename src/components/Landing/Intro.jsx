import { ReactTyped } from "react-typed";

function Intro() {
  return (
    <div className="text-white bg-[#080e31]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00636D] font-bold p-2 text-2xl">
          WELCOME TO HAKI
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#CBD4F4]">
          LEGAL SERVICES
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-2xl text-xl font-bold py-4 text-[#00636D]">
            Find Experts in
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#CBD4F4]"
            strings={["Tax Law", "Family Law", "Land Law", "Much More..."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#CBD4F4]">
          Let us help you find legal reps, tailored to your needs
        </p>
        <button className="bg-[#00636D] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#CBD4F4] hover:bg-[#CBD4F4] hover:text-[#00636D]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;
