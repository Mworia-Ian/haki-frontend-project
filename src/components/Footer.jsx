import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer className=" shadow bg-[#080e31]">
        <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
          <span className="text-lg text-gray-500 sm:text-center dark:text-white">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Haki™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
