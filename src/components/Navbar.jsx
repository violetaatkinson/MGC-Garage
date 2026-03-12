import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

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

        <CartWidget />

      </div>
    </header>
  );
};

export default Navbar;