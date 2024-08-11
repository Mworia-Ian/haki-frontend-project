import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sticky shadow bg-[#37B9F1] w-full m-0 p-0">
      <div className="w-full  p-3 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-lg text-[#242d2d] text-center">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Haki™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#242d2d] sm:mt-0 justify-center md:justify-start">
          <li>
            <Link to="/about" className="text-[#242d2d] hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className=" text-[#242d2d] hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-[#242d2d] hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
