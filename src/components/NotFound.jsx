import React from "react";
import { Link } from "react-router-dom";
import nfImage from "../assets/nf3.jpg";

const NotFound = () => {
	return (
		<div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden ">
			<img
				src={nfImage}
				alt="Motorcycle background"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-black/70"></div>

			<div className="relative z-10 px-6 sm:px-8 max-w-2xl">
				<h1 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
					Page Not Found
				</h1>
				<p className="mt-6 text-stone-300 text-sm md:text-base tracking-[0.15em] leading-relaxed">
					The road you're looking for doesn't exist. But you can still explore
					our premium motorcycles or schedule expert service.
				</p>

				<div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-center w-full max-w-3xl mx-auto">
					
					<Link to="/" className="w-64 sm:w-full">
						<button className="w-full border border-[#ff6b00] text-white py-4 tracking-widest  rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:text-white hover:scale-[1.02] active:scale-95">
							HOME
						</button>
					</Link>

			
					<Link to="/inventory" className="w-64 sm:w-full">
						<button className="w-full border border-[#ff6b00] text-white py-4 tracking-widest  rounded-md transition-all duration-300 hover:bg-stone-800 hover:text-[#ff6b00] hover:border-[#ff6b00] hover:scale-[1.02] active:scale-95">
							VIEW INVENTORY
						</button>
					</Link>

				
					<Link to="/schedule-service" className="w-64 sm:w-full">
						<button className="w-full border border-[#ff6b00] text-white py-4 tracking-widest  rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:shadow-[0_0_18px_rgba(255,107,0,0.6)] hover:scale-[1.02] active:scale-95">
							SERVICE
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
