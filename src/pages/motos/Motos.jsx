import React from "react";
import HeaderPage from "../../components/HeaderPage";
import ButtonHome from "../../components/ButtonHome";

const Motos = ({ motos }) => {
	return (
		<>
			<ButtonHome />
			<HeaderPage
        		title="OUR MOTORCYCLES"
        		subtitle="Browse our collection of vintage motorcycles — original classics, restored legends, and unique custom builds."
      		/>

			<section className="bg-[#202020] text-gray-300 px-4 sm:px-6 py-12 sm:py-16">
				<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{motos.map((moto) => (
						<div
							key={moto.id}
							className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-500 transition"
						>
							<div className="relative">
								<img
									src={moto.img}
									alt={moto.model}
									className="w-full h-64 object-cover"
								/>

								<span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 tracking-widest font-semibold uppercase rounded-sm">
									{moto.condition}
								</span>
							</div>

							<div className="p-6">
								<h3 className="text-white tracking-widest text-lg font-semibold">
									{moto.brand} {moto.model}
								</h3>

								<p className="text-gray-500 text-sm mt-2">
									{moto.year} - {moto.engine}
								</p>

								<p className="text-orange-500 text-2xl font-bold mt-4">
									${moto.cost.toLocaleString()}
								</p>

								<button className="mt-6 w-full border border-orange-500 text-orange-500 py-3 tracking-widest font-semibold rounded-md transition hover:bg-orange-500 hover:text-white">
									VIEW DETAILS →
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Motos;
