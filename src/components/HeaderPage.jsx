import React from "react";

const HeaderPage = ({ title, subtitle }) => {
	return (
		<div className="bg-[#202020] w-full py-10 flex flex-col items-center justify-center text-center px-4">
			<h2 className="text-3xl sm:text-4xl hover:text-orange-500 font-bold text-white tracking-widest mb-4">
				{title}
			</h2>

			<p className="text-[#999] tracking-widest font-light text-base sm:text-base max-w-md sm:max-w-xl mx-auto leading-relaxed">
				{subtitle}
			</p>
		</div>
	);
};

export default HeaderPage;
