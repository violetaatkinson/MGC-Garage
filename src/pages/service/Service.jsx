import React from "react";
import ButtonHome from "../../components/ButtonHome";
import HeaderPage from "../../components/HeaderPage";

import { FaTools } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";

const inputClass =
	"w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none transition text-gray-300 placeholder-zinc-600 caret-orange-500";

const Service = ({services, contactCustomer, swalStyles, scheduleService, handleChange, handleSubmit, handleServiceToggle, total, handleAddServices}) => {
	return (
		<>
			<ButtonHome />
			<HeaderPage
				title="SCHEDULE SERVICE"
				subtitle="Choose your services and schedule your appointment with our expert team"
			/>
			<style dangerouslySetInnerHTML={{ __html: swalStyles }} />
			<section className="bg-[#202020] text-gray-300 px-4 sm:px-6 py-12 sm:py-16">
				<form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">
					

					<div className="bg-zinc-900 p-6 sm:p-8 border border-zinc-800 rounded-xl">
						{services.map((service) => {
							const selected = scheduleService.selectedServices.some(
								(s) => s.id === service.id,
							);

                            // .some() pregunta: "¿existe ALGÚN elemento en selectedServices cuyo id sea igual al id del service actual?"


							return (
								<label
									key={service.id}
									className={`flex items-center justify-between border p-6 mb-5 rounded-lg transition cursor-pointer
                ${selected ? "border-orange-500" : "border-zinc-700 hover:border-orange-500"}`}
								>
									<div className="flex items-start gap-4">
										<input
											type="checkbox"
                                            // se ejecuta solo cuando el usuario hace click
											onChange={() => handleServiceToggle(service)}
											checked={selected} // ↑ checked controla si el checkbox está marcado
											className="mt-1 w-5 h-5 accent-orange-500"
										/>

										<div>
											<h3 className="text-white tracking-widest text-sm">
												{service.type.toUpperCase()}
											</h3>

											<p className="text-gray-500 text-sm mt-1">
												{service.detail}
											</p>
										</div>
									</div>

									<span className="text-orange-500 font-semibold text-lg">
										${service.cost}
									</span>
								</label>
							);
						})}
					</div>


					<div className=" bg-zinc-900 p-6 sm:p-8 flex justify-between items-center border border-zinc-700 p-5 rounded-lg">
						<span className="tracking-widest text-sm flex items-center gap-3">
							<FaTools className="text-orange-500 text-lg" />
							SELECTED TOTAL
						</span>

						<span className="text-orange-500 text-xl font-bold">${total}</span>
					</div>


					<div className="bg-zinc-900 p-6 sm:p-8 border border-zinc-800 rounded-xl">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{contactCustomer.map((field) => (
								<div key={field.name}>
									<label className="block text-sm mb-2 tracking-widest">
										{field.label.toUpperCase()}
									</label>

									<input
										type={field.name === "date" ? "date" : "text"}
										name={field.name}
										value={scheduleService[field.name]}
										onChange={handleChange}
										required
										className={inputClass}
									/>
								</div>
							))}
						</div>

						<button
							type="submit"
							onClick={handleAddServices}
							className="group w-full flex items-center justify-center gap-3 border border-[#ff6b00] text-white py-4 tracking-widest rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95 mt-10 mb-3"
						>
							ADD SERVICES TO CART
							<FaMotorcycle className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Service;
