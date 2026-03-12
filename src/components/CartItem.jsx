import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, removeItem }) => {
	const isService = item.category === "service";

	return (
		<div className="flex items-center gap-3 p-3 sm:p-4 mb-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500 rounded-lg transition">

		
			<div className="w-14 h-12 sm:w-20 sm:h-16 flex-shrink-0">
				{isService ? (
					<div className="w-full h-full bg-zinc-800 border border-zinc-700 flex items-center justify-center rounded">
						<span className="text-xl sm:text-2xl">🔧</span>
					</div>
				) : (
					<img
						src={item.img}
						alt={item.model}
						className="w-full h-full object-cover rounded opacity-80 hover:opacity-100 transition-opacity duration-300"
					/>
				)}
			</div>

		
			<div className="flex-1 min-w-0">
				{isService ? (
					<>
						<p className="text-white font-semibold tracking-widest text-xs sm:text-sm truncate">{item.type}</p>
						<p className="text-gray-500 text-xs tracking-widest mt-1 hidden sm:block">{item.detail}</p>
						<span className="text-xs text-orange-500 tracking-widest uppercase">Service</span>
					</>
				) : (
					<>
						<p className="text-white font-semibold tracking-widest text-xs sm:text-sm truncate">{item.brand} {item.model}</p>
						<p className="text-gray-500 text-xs tracking-widest mt-1 hidden sm:block">{item.year} · {item.engine}</p>
						<span className="text-xs text-orange-500 tracking-widest uppercase">{item.condition}</span>
					</>
				)}
			</div>

		
			<div className="flex items-center gap-3 flex-shrink-0">
				<p className="font-bold text-orange-500 text-base sm:text-lg">
					${Number(item.cost).toLocaleString()}
				</p>
				<button
					onClick={() => removeItem(item.id)}
					className="text-zinc-600 hover:text-orange-500 transition text-sm p-1"
				>
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default CartItem;