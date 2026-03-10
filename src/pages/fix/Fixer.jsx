import React from "react";
import ButtonHome from "../../components/ButtonHome";
import HeaderPage from "../../components/HeaderPage";

const inputClass =
	"w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none transition text-gray-300 placeholder-zinc-600 caret-orange-500";

const Fixer = ({ motoInfo, contactInfo, swalStyles, fixFData, handleChange, handleSubmit}) => {
	return (
		<>
			<style dangerouslySetInnerHTML={{
				__html: `
						${swalStyles}
						select { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
						select option:hover, select option:focus, select option:checked {
						background-color: #f97316 !important;
						color: #ffffff !important;
						}
					    select option { background-color: #1F1F22; color: #d1d5db; }
						`,
				}}
			/>

			<ButtonHome />
			<HeaderPage
				title="FIXER UPPER"
				subtitle={
					<div>
						<p>
							Got an old bike? Bring it in — we'll restore it or give you
							trade-in value toward a new ride.
						</p>
						<p className="mt-3">
							Fill out the form below and we'll get back to you with an
							evaluation.
						</p>
					</div>
				}
			/>

			<section className="bg-[#202020] text-gray-300 px-4 sm:px-6 py-12 sm:py-16">
				<form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">
					<div className="bg-zinc-900 p-6 sm:p-8 border border-zinc-800 rounded-xl">
						<h3 className="text-white font-bold tracking-widest uppercase text-lg mb-6 pb-3 ">
							Your Motorcycle
						</h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
						{/* slice(inicio, fin) corta el array y devuelve los elementos entre esas posiciones. [brand, model]  */}
							{motoInfo.slice(0, 2).map((field) => (
								<div key={field.name}>
									<label className="block text-sm mb-2 tracking-widest">
										{field.label.toUpperCase()}
									</label>
									<input
										type="text"
										name={field.name}
										value={fixFData[field.name]}
										onChange={handleChange}
										required
										placeholder={
											field.name === "brand" ? "Honda" : "CBR600RR"
										}
										className={inputClass}
									/>
								</div>
							))}
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
							{motoInfo.slice(2, 4).map((field) => (
								<div key={field.name}>
									<label className="block text-sm mb-2 tracking-widest">
										{field.label.toUpperCase()}
									</label>
									{field.options ? (
										<select
											name={field.name}
											value={fixFData[field.name]}
											onChange={handleChange}
											required
											className={`${inputClass} cursor-pointer hover:border-orange-500 focus:ring-1 focus:ring-orange-500`}
										>
											<option value="" disabled>
												Select condition
											</option>
											{field.options.map((opt) => (
												<option key={opt} value={opt}>
													{opt}
												</option>
											))}
										</select>
									) : (
										<input
											type="number"
											name={field.name}
											value={fixFData[field.name]}
											onChange={handleChange}
											required
											placeholder="2018"
											className={`${inputClass} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
										/>
									)}
								</div>
							))}
						</div>
						<div>
							<label className="block text-sm mb-2 tracking-widest">
								{motoInfo[4].label.toUpperCase()}
							</label>
							<textarea
								name="description"
								value={fixFData.description}
								onChange={handleChange}
								required
								rows="4"
								placeholder="Describe the condition, history, and any issues..."
								className={`${inputClass} resize-none`}
							/>
						</div>
					</div>

					<div className="bg-zinc-900 mt-10 p-6 sm:p-8 border border-zinc-800 rounded-xl">
						<h3 className="text-white font-bold tracking-widest uppercase text-lg mb-6 pb-3 ">
							Your Contact Info
						</h3>

						<div className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{contactInfo.map((field) => (
									<div key={field.name}>
										<label className="block text-sm mb-2 tracking-widest">
											{field.label.toUpperCase()}
										</label>
										<input
											type={field.name === "email" ? "email" : "tel"}
											name={field.name}
											value={fixFData[field.name]}
											onChange={handleChange}
											required={field.name !== "phone"}
											placeholder={
												field.name === "phone"
													? "(555) 000-0000"
													: "you@example.com"
											}
											className={inputClass}
										/>
									</div>
								))}
							</div>
						</div>
						<button
							type="submit"
							className="group w-full flex items-center justify-center gap-3 border border-[#ff6b00] text-white py-4 tracking-widest rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95 mt-10 mb-3"
						>
							SUBMIT TRADE-IN REQUEST
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Fixer;
