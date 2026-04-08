import React from "react";
import { Link } from "react-router-dom";
import j from "../assets/j.jpg";

const EmptyCart = () => {
	return (
		<div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
			<img
				src={j}
				alt="Motorcycle background"
				className="absolute inset-0 w-full h-full object-cover object-center"
			/>
			<div className="absolute inset-0 bg-black/70"></div>

			<div className="relative z-10 px-6 sm:px-8 max-w-2xl w-full">
				<h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.2em] uppercase leading-tight">
					Your Cart is Empty
				</h1>
				<p className="mt-6 text-stone-400 text-sm tracking-[0.2em] leading-loose">
					Looks like you haven't added anything yet.{" "}
					<br className="hidden sm:block"></br>Browse our motorcycles or book a
					service.
				</p>

				<div className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center w-full mx-auto">
					<Link to="/motos" className="w-56 sm:w-48">
						<button className="w-full border border-[#ff6b00] text-white py-4 text-xs tracking-[0.2em] rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95">
							VIEW INVENTORY
						</button>
					</Link>
					<Link to="/schedule-service" className="w-56 sm:w-48">
						<button className="w-full border border-[#ff6b00] text-white py-4 text-xs tracking-[0.2em] rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95">
							OUR SERVICES
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EmptyCart;
