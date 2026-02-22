import React from "react";
import { Link } from "react-router-dom";

const links = [
	{ name: "Inventory", href: "/inventory" },
	{ name: "Parts Request", href: "/parts-request" },
	{ name: "Schedule Service", href: "/schedule-service" },
	{ name: "Fixer Upper", href: "/fixer-upper" },
	{ name: "Contact Us", href: "/contact" },
];

const Footer = () => {
	return (
		<div>
			<footer className="bg-stone-900 text-gray-300 mt-auto">
				<div className="max-w-5xl mx-auto px-6 py-6 md:py-8 text-center">
					<nav className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-x-14 md:gap-y-8 text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.35em] font-light ">
						{links.map((link) => (
							<Link
								key={link.name}
								to={link.href}
								className="relative group transition-colors duration-300 hover:text-[#ff6b00] 
                     			after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full 
                     			after:bg-[#ff6b00] after:origin-center after:scale-x-0 after:transition-transform 
                     			after:duration-300 hover:after:scale-x-100"
							>
								{link.name}
							</Link>
						))}
					</nav>

					<div className="mt-6 md:mt-8 border-t border-stone-700/70 pt-4 md:pt-6">
						<h2 className="text-white font-semibold text-2xl md:text-3xl tracking-[0.15em] md:tracking-[0.2em]">
							MCJ GARAGE
						</h2>

						<p className="mt-6 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-stone-500 uppercase leading-7 md:leading-normal">
							Premium motorcycles <br className="md:hidden" />
							and expert service
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
