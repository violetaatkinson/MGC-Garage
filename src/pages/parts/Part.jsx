import React from "react";
import ButtonHome from "../../components/ButtonHome";
import HeaderPage from "../../components/HeaderPage";

const Part = ({ partData, swalStyles , handleChange, handleSubmit }) => {
	return (
		<>
		    <ButtonHome />
			<HeaderPage
        		title="PARTS REQUEST"
       		 	subtitle="Need a specific part? Fill out the form and we'll source it for you."
      		/>
            <style dangerouslySetInnerHTML={{ __html: swalStyles }} />
			<section className="bg-[#202020] text-gray-300 py-8 sm:py-16">
				<div className="max-w-5xl mx-auto  bg-zinc-900 p-6 sm:p-8 border border-zinc-800 rounded-xl">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm mb-2 tracking-widest">
									FULL NAME
								</label>
								<input
									type="text"
									name="name"
									value={partData.name}
									onChange={handleChange}
                                    required
									placeholder="John Doe"
									className="w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none rounded-sm"
								/>
							</div>

							<div>
								<label className="block text-sm mb-2 tracking-widest">
									PHONE
								</label>
								<input
									type="tel"
									name="phone"
									value={partData.phone}
									onChange={handleChange}
                                    required
									placeholder="(555) 000-0000"
									className="w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none rounded-sm"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm mb-2 tracking-widest">
								EMAIL
							</label>
							<input
								type="email"
								name="email"
								value={partData.email}
								onChange={handleChange}
                                required
								placeholder="you@example.com"
								className="w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none rounded-sm"
							/>
						</div>

						<div>
							<label className="block text-sm mb-2 tracking-widest">
								MOTORCYCLE MODEL
							</label>
							<input
								type="text"
								name="motorcycleM"
								value={partData.motorcycleM}
								onChange={handleChange}
                                required
								placeholder="2022 Kawasaki Ninja ZX-10R"
								className="w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none rounded-sm"
							/>
						</div>

						<div>
							<label className="block text-sm mb-2 tracking-widest">
								PART NEEDED
							</label>
							<input
								type="text"
								name="partNeeded"
								value={partData.partNeeded}
								onChange={handleChange}
                                required
								placeholder="Front brake caliper"
								className="w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none rounded-sm"
							/>
						</div>

						<div>
							<label className="block text-sm mb-2 tracking-widest">
								ADDITIONAL DETAILS
							</label>
							<textarea
								name="additionalD"
								value={partData.additionalD}
								onChange={handleChange}
                                required
								rows="4"
								className="w-full bg-[#1F1F22] border border-zinc-700 p-3 focus:border-orange-500 outline-none resize-none rounded-sm"
							/>
						</div>

						<div>
							<label className="block text-sm mb-3 tracking-widest">
								FULFILLMENT METHOD
							</label>
							<div className="flex gap-6">
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="option"
										value="Pickup"
										checked={partData.option === "Pickup"}
										onChange={handleChange}
                                        required
										className="accent-orange-500"
									/>
									Pickup
								</label>
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="option"
										value="Delivery"
										checked={partData.option === "Delivery"}
										onChange={handleChange}
                                        required
										className="accent-orange-500"
									/>
									Delivery
								</label>
							</div>
						</div>

						<button className="group w-full flex items-center justify-center gap-3 border border-[#ff6b00] text-white py-4 tracking-widest font-semibold rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95 mt-5 mb-3 ">
							SUBMIT REQUEST
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Part;
