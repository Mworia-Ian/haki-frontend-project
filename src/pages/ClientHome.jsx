import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

function ClientHome() {
  const navigate = useNavigate();
  const {user, setUser} = useUser();


  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('session');
    navigate("/login")
  }
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

          <a onClick={() => navigate("/lawyers")}>
            <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
              Lawyers
            </li>
          </a>

          <a onClick={() => navigate("/subscriptions")}>
            <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
              Subcribe
            </li>
          </a>
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
        <Header />
      </div>
      <div className="text-center ">
        <h1 className="mb-4 text-3xl font-bold text-[#37B9F1]">
          Welcome {user.firstname}
        </h1>
        <p>
          Thank you for choosing us to be your partner in your journey to find
          credible and reliable legal representation! <br />
          <em className="font-bold">
            Here you can find and hire legal experts.
          </em>
        </p>
      </div>
      <div className="flex items-center w-full py-[3rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="max-w-sm bg-[#F2F5F5] border border-[#F2F5F5] rounded-lg shadow flex flex-col items-center">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/images/8778031.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#37B9F1]">
                  Find Lawyers
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#242d2d]">
                Search through our extensive database for a lawyer. Tailored to
                your needs
              </p>
              <a
                onClick={() => navigate("/lawyers")}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#55add3] focus:ring-4 focus:outline-none"
              >
                Find Lawyers
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
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/images/8170228.jpg"
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
                Create a case, view your past cases and check the status of your
                ongoing cases.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#55add3] focus:ring-4 focus:outline-none"
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

export default ClientHome;
