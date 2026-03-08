import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-stone-900 backdrop-blur-md border-b border-stone-700/70 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
      
        <Link to="/">
          <img
            src={logo}
            alt="MCJ Garage"
            className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <Link to="/cart">
          <div className="border border-[#ff6b00] rounded-full h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#ff6b00] hover:scale-105 active:scale-95">
            <FaMotorcycle className="text-white text-lg sm:text-xl md:text-2xl" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;