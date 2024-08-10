import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div id="About">
      <div className="w-full bg-[#F2F5F5] py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-xl drop-shadow-2xl"
            src="src/assets/images/Lawyer-Judge-3--Streamline-Ux.png"
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#242d2d] font-bold text-xl">
              About us
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#37B9F1]">
              Making it easier to access legal representation
            </h1>
            <p className="text-[#242d2d]">
            Haki aims to connect everyday Kenyans with reliable legal representation. Our platform helps you find customized legal services that match your specific needs.
            </p>
            <button onClick={() => navigate("/signup")} className="bg-[#37B9F1] text-[#242d2d] hover:bg-[#242d2d] hover:text-[#37B9F1] w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0 py-3 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
