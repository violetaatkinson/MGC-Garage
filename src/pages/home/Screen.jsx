import React from "react";
import { Link } from "react-router-dom";

const Screen = ({ screen }) => {
	return (
		<div>
			<Link to={screen.href} className="relative group h-[400px] sm:h-[500px] md:h-[600px] flex items-center overflow-hidden focus:outline-none">
				<img src={screen.img} alt={screen.section} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110 group-focus:scale-110"/>

				<div className="absolute inset-0 bg-black/60 md:bg-black/70 transition-all duration-700 group-hover:bg-black/50 group-active:bg-black/50 group-focus:bg-black/50"></div>

				<div className="relative z-10 px-6 sm:px-10 md:px-16">
					<h2 className="font-bebas font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] uppercase transition-colors duration-300 group-hover:text-orange-500 group-active:text-orange-500 group-focus:text-orange-500">
						{screen.section}
					</h2>

					<p className="text-gray-400 mt-6 sm:text-normal md:text-xl tracking-wider">
						{screen.information}
					</p>

					<span className="block mt-6 md:mt-8 text-orange-500 text-4xl md:text-6xl opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100 group-active:scale-100 group-focus:opacity-100 group-focus:scale-100">
						→
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Screen;
