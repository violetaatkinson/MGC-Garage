import React from "react";
import { useContext } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { cart } = useContext(CartContext);

	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<>
			<Link to="/cart">
				<div className="relative border border-[#ff6b00] rounded-full h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#ff6b00] hover:scale-105 active:scale-95">
					<FaMotorcycle className="text-white text-lg sm:text-xl md:text-2xl" />

					{totalItems > 0 && (
						<span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md">
							{" "}
							{totalItems}
						</span>
					)}
				</div>
			</Link>
		</>
	);
};

export default CartWidget;
