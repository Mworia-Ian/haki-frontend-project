import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h5 className="text-xl font-bold mb-2">Company Name</h5>
          <p className="text-sm">1234 Street Name, City, State, 56789</p>
          <p className="text-sm">Email: info@company.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div className="text-center md:text-right">
          <h5 className="text-xl font-bold mb-2">Follow Us</h5>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
