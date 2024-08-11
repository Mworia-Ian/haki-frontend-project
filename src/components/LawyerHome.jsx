import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function LawyerHome() {
  const user = { name: "Lema Samuel", role: "lawyer" };
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center h-24 mx-auto px-4 bg-[#F2F5F5] w-full mb-3">
        <h1 className="w-full text-3xl font-bold  pl-7 text-[#37B9F1] hover:text-[#6ab6d6]">
          <a href="#">Haki</a>
        </h1>
        <ul className="flex text-[#37B9F1] pr-7 ">
          <a onClick={() => navigate("/home")}>
            <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
              Home
            </li>
          </a>

          <a onClick={() => navigate("/cases")}>
            <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
              Cases
            </li>
          </a>

          <a onClick={() => navigate("")}>
            <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
              History
            </li>
          </a>
        </ul>
        <button
          type="button"
          className="text-white bg-[#37B9F1] text-xl hover:bg-[#40a8d4] focus:ring-4 focus:outline-none font-medium rounded-lg px-4 py-2 text-center mr-8"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-end">
        <Header />
      </div>
      <div className="text-center ">
        <h1 className="mb-4 text-3xl font-bold text-[#37B9F1]">
          Welcome, {user.name}
        </h1>
        <p>You can manage your clients and provide legal services.</p>
      </div>
      <div className="flex items-center w-full py-[3rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div class="max-w-sm bg-white border border-[#F2F5F5] rounded-lg shadow flex flex-col items-center">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="src/assets/images/clients.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#37B9F1]">
                  Find Clients
                </h5>
              </a>
              <p class="mb-3 font-normal text-[#242d2d]">
                Find people who might be inneed of your vast experience as a legal representative
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#55add3] focus:ring-4 focus:outline-none"
              >
                Find Clients
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="src/assets/images/8170228.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#37B9F1]">
                  Cases
                </h5>
              </a>
              <p class="mb-3 font-normal text-[#242d2d]">
                View your new case, upcoming cases and past cases
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#55add3] focus:ring-4 focus:outline-none"
              >
                Cases
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
