import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white">
      <nav className="bg-white border-b border-gray-200 px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-screen-xl space-y-4 lg:space-y-0">
          {/* Logo */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            <Link to="home" className="flex items-center">
              <h1 className="font-semibold text-2xl tracking-wide">Explore</h1>
            </Link>
          </div>

          {/* Centered Search Input */}
          <div className="flex justify-center items-center w-full lg:w-auto">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-1  top-1/2 transform -translate-y-1/2 px-5 py-2 bg-red-500 text-white rounded-2xl"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right Links */}
          <div className="flex items-center lg:order-2 space-x-4">
            <Link to="airnub" className="font-semibold hover:text-blue-500">
              Airnub your home
            </Link>
            <Link to="signup" className="font-semibold hover:text-blue-500">
              Sign up
            </Link>
            <Link to="login" className="font-semibold hover:text-blue-500">
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
