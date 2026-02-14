import React from "react";

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
			<footer className="bg-stone-800 text-gray-300 mt-auto">
				<div className="max-w-5xl mx-auto px-6 py-10 md:py-11 text-center">
					<nav
						className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-x-14 md:gap-y-8 text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.35em] font-light ">
						{links.map((link) => (
							 <a key={link.name} href={link.href} className="relative group transition-colors duration-300 hover:text-[#ff6b00] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#ff6b00] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                                {link.name}
                             </a>
						))}
					</nav>

					
					<div className="mt-12 md:mt-14 border-t border-stone-700/70 pt-8 md:pt-10">
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
