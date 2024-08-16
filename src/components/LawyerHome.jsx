import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

function LawyerHome() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('session');
    navigate("/login");
  };

  const handleNavigateToCases = () => {
    navigate("/cases");
  };

  return (
    <div>
      <div className="flex justify-between items-center h-24 mx-auto px-4 bg-[#F2F5F5] w-full mb-3">
        <h1 className="w-full text-3xl font-bold pl-7 text-[#37B9F1] hover:text-[#6ab6d6]">
          <a href="#">Haki</a>
        </h1>
        <ul className="flex text-[#37B9F1] pr-7">
          <li
            onClick={() => navigate("/home")}
            className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={handleNavigateToCases}
            className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300 cursor-pointer"
          >
            Cases
          </li>
          {/* <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300 cursor-pointer">
            History
          </li> */}
        </ul>
        <button
          onClick={handleLogout}
          type="button"
          className="text-white bg-[#37B9F1] text-xl hover:bg-[#40a8d4] focus:ring-4 focus:outline-none font-medium rounded-lg px-4 py-2 text-center mr-8"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-end">
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-[#37B9F1]">
          Welcome {user.firstname}
        </h1>
        <p>You can manage your clients and provide legal services.</p>
      </div>
      <div className="flex items-center w-full py-[3rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols gap-8">
          {/* <div className="max-w-sm bg-white border border-[#F2F5F5] rounded-lg shadow flex flex-col items-center">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/images/clients.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#37B9F1]">
                  Find Clients
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#242d2d]">
                Find people who might be in need of your vast experience as a legal representative
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#55add3] focus:ring-4 focus:outline-none"
              >
                Find Clients
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div> */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/assets/images/8170228.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#37B9F1]">
                  Cases
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#242d2d]">
                View your new case, upcoming cases, and past cases
              </p>
              <a
                onClick={handleNavigateToCases}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#55add3] focus:ring-4 focus:outline-none cursor-pointer"
              >
                Cases
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LawyerHome;