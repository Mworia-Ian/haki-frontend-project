import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="flex justify-between border-b-2 border-[#37B9F1] items-center h-24 mx-auto px-4 text-white bg-[#F2F5F5] w-full mb-10">
      <h1 className="w-full text-3xl font-bold  text-[#37B9F1] hover:text-[#242d2d] pl-7">
        <a href="#">Haki</a>
      </h1>
      <ul className="flex text-[#37B9F1] pr-7 ">
        <Link to="About" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#242d2d] hover:scale-150 duration-300">
            About
          </li>
        </Link>
        <Link to="Services" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#242d2d]  hover:scale-150 duration-300">
            Services
          </li>
        </Link>

        <Link to="Plans" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#242d2d]  hover:scale-150 duration-300">
            Plans
          </li>
        </Link>
        <Link to="Services" smooth={true} duration={500}>
          <li className="p-4 hover:text-[#242d2d]  hover:scale-150 duration-300">
            Services
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
