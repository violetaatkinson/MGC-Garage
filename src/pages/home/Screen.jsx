import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Screen = ({ screen }) => {
	const ref = useRef(null);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!ref.current) return;

			const rect = ref.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			
			const visible = rect.top / windowHeight;

			
			setOffset(visible * 50);
		};

		handleScroll(); 
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div ref={ref}>
			<Link
				to={screen.href}
				className="relative group h-[400px] sm:h-[500px] md:h-[600px] flex items-center overflow-hidden"
			>
				
				<img
					src={screen.img}
					alt={screen.section}
					className="absolute inset-0 w-full h-[110%] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
					style={{
						transform: "translateY(-5%)",
					}}
				/>
				<div className="absolute inset-0 bg-black/60 md:bg-black/70 transition-all duration-500 group-hover:bg-black/50"></div>

	
				<div className="relative z-10 px-6 sm:px-10 md:px-16">
					<h2 className="font-bebas font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] uppercase transition-colors duration-300 group-hover:text-orange-500">
						{screen.section}
					</h2>

					<p className="text-gray-400 mt-6 sm:text-normal md:text-xl tracking-wider">
						{screen.information}
					</p>

					<span className="block mt-6 md:mt-8 text-orange-500 text-4xl md:text-6xl opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
						→
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Screen;
