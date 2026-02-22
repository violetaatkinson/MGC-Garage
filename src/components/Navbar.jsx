import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="bg-stone-900 backdrop-blur-md border-b border-stone-700/70 sticky top-0 z-50">
			<div className="w-full px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
				<Link to="/">
					<h1 className="text-white font-semibold text-xl md:text-2xl tracking-[0.3em] md:tracking-[0.3em] cursor-pointer transition-colors duration-300">
						MCJ GARAGE
					</h1>
				</Link>
				
				<Link to="/cart" className="group">
					<div className="group border border-[#ff6b00] rounded-full p-3 cursor-pointer transition-all duration-300 hover:bg-[#ff6b00] hover:scale-110 active:scale-95">
						<FaMotorcycle className="text-white text-xl transition-colors duration-300" />
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
