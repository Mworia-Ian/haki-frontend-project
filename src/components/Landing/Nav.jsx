import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#080e31] w-full">
      <h1 className="w-full text-3xl font-bold  text-[#00636D] hover:text-white pl-7">
        <a href="#">Haki</a>
      </h1>
      <ul className="flex text-[#CBD4F4] pr-7 ">
        <Link to="About" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#00636D] hover:scale-150 duration-300">
            About
          </li>
        </Link>
        <Link to="Services" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#00636D] hover:scale-150 duration-300">
            Services
          </li>
        </Link>

        <Link to="Plans" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#00636D] hover:scale-150 duration-300">
            Plans
          </li>
        </Link>
        <Link to="Services" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#00636D] hover:scale-150 duration-300">
            Services
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
