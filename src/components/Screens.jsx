import React from "react";

const screensInfo = [
	{
		id: 1,
		section: "Inventory",
		img: "/src/assets/t5.jpeg",
		href: "/inventory",
		information: "Browse our collection of motorcycles",
	},
	{
		id: 2,
		section: "Fixer Upper",
		img: "/src/assets/fix.jpg",
		href: "/parts-request",
		information: "Restore your old bike",
	},
	{
		id: 3,
		section: "Schedule Service",
		img: "/src/assets/a.jpg",
		href: "/schedule-service",
		information: "Expert repairs and maintenance ",
	},
	{
		id: 4,
		section: "Parts Request",
		img: "/src/assets/b.jpg",
		href: "/fixer-upper",
		information: "Source genuine parts for your motorcycle",
	},
	{
		id: 5,
		section: "Contact Us",
		img: "/src/assets/t.jpeg",
		href: "/contact",
		information: "Get in touch with our team",
	},
];

const Screens = () => {
	return (
		<div className="flex flex-col ">
			{screensInfo.map((screen) => {
				return (
					<a
						key={screen.id}
						href={screen.href}
						className=" relative group h-[400px] sm:h-[500px] md:h-[600px] flex items-center overflow-hidden"
					>
						<img
							src={screen.img}
							className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div  className="absolute inset-0 bg-black/60 md:bg-black/70 md:group-hover:bg-black/50 transition-all duration-700"></div>
						<div className="relative z-10 px-6 sm:px-10 md:px-16">
							<h2
								className="font-bebas font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] uppercase transition-colors duration-300 md:group-hover:text-orange-500">
								{screen.section}
							</h2>
							<p className="text-gray-400 mt-6 sm:text-base md:text-xl tracking-wider">
								{screen.information}
							</p>
							<span className="block mt-6 md:mt-8 text-orange-500 text-4xl md:text-6xl opacity-100 scale-100 md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-500">
								→
							</span>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default Screens;
