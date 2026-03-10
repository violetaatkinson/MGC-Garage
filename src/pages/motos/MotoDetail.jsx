import React from "react";
import { Link } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";
import BackMotos from "../../components/BackMotos";

const MotoDetail = ({moto}) => {
	return (
		<>
      <BackMotos/>
			<section className="bg-[#202020] text-gray-300 px-4 sm:px-6 py-12 sm:py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
					<div>
						<img
							src={moto.img}
							alt={moto.model}
							className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover rounded-lg"
						/>
					</div>

					<div className="flex flex-col md:pl-8 lg:pl-12">
						<h1 className="text-white text-3xl sm:text-4xl tracking-widest font-semibold mt-2 sm:mt-12">
							{moto.brand} - <br className="sm:hidden" /> {moto.model}
						</h1>

						<p className="text-orange-500 text-3xl font-bold mt-6">
							${Number(moto.cost).toLocaleString()}
						</p>

						<div className="mt-8 grid grid-cols-2 gap-y-6 text-sm tracking-widest">
							<div>
								<p className="text-gray-500 uppercase">Engine</p>
								<p className="text-gray-300 mt-1">{moto.engine}</p>
							</div>

							<div>
								<p className="text-gray-500 uppercase">Year</p>
								<p className="text-gray-300 mt-1">{moto.year}</p>
							</div>

							<div>
								<p className="text-gray-500 uppercase">Condition</p>
								<p className="text-gray-300 mt-1">{moto.condition}</p>
							</div>

							<div>
								<p className="text-gray-500 uppercase">Brand</p>
								<p className="text-gray-300 mt-1">{moto.brand}</p>
							</div>
						</div>

						<div className="mt-12 flex flex-col sm:flex-row gap-4">
							<Link to="/cart" className="w-full">
								<button className="group w-full flex items-center justify-center gap-3 border border-[#ff6b00] text-white py-4 tracking-widest font-semibold rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95">
									ADD TO CART
									<FaMotorcycle className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MotoDetail;
