import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import ButtonHome from "../components/ButtonHome";
import HeaderPage from "../components/HeaderPage";
import j from "../assets/j.jpg";

const Cart = () => {
	const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

	if (cart.length === 0) {
		return (
			<div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
				<img
					src={j}
					alt="Motorcycle background"
					className="absolute inset-0 w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/70"></div>

				<div className="relative z-10 px-6 sm:px-8 max-w-2xl w-full">
					<h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.2em] uppercase leading-tight">
						Your Cart is Empty
					</h1>
					<p className="mt-6 text-stone-400 text-sm tracking-[0.2em] leading-loose">
						Looks like you haven't added anything yet. <br className="hidden sm:block"></br>Browse our motorcycles or
						book a service.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center w-full mx-auto">
						<Link to="/motos" className="w-56 sm:w-48">
							<button className="w-full border border-[#ff6b00] text-white py-4 text-xs tracking-[0.2em] rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95">
								VIEW INVENTORY
							</button>
						</Link>
						<Link to="/schedule-service" className="w-56 sm:w-48">
							<button className="w-full border border-[#ff6b00] text-white py-4 text-xs tracking-[0.2em] rounded-md transition-all duration-300 hover:bg-[#ff6b00] hover:scale-[1.02] active:scale-95">
								OUR SERVICES
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<ButtonHome />
			<HeaderPage
				title="YOUR CART"
				subtitle="Review your selected motorcycles and services before checkout."
			/>

			<section className="bg-[#202020] text-gray-300 px-4 sm:px-6 py-10 sm:py-12 min-h-screen">
				<div className="max-w-3xl mx-auto">
					<div className="mb-6 space-y-3">
						{cart.map((item) => (
							<CartItem key={item.id} item={item} removeItem={removeItem} />
						))}
					</div>

					<div className="bg-zinc-900 border border-zinc-800 p-5 sm:p-6 rounded-lg">
						<div className="flex justify-between text-xs sm:text-sm tracking-widest uppercase mb-3">
							<span className="text-gray-500">Subtotal</span>
							<span className="text-gray-300">
								${totalPrice.toLocaleString()}
							</span>
						</div>
						<div className="flex justify-between text-xs sm:text-sm tracking-widest uppercase mb-3">
							<span className="text-gray-500">Tax (7%)</span>
							<span className="text-gray-300">
								${(totalPrice * 0.07).toLocaleString()}
							</span>
						</div>
						<div className="border-t border-zinc-700 mt-4 pt-4 flex justify-between tracking-widest uppercase">
							<span className="text-white font-semibold text-base sm:text-lg">
								Total
							</span>
							<span className="text-orange-500 font-bold text-xl sm:text-2xl">
								${(totalPrice * 1.07).toLocaleString()}
							</span>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row mt-6 gap-4">
						<button className="flex-1 bg-orange-500 hover:bg-orange-600 py-4 rounded-md text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95">
							PROCEED TO CHECKOUT →
						</button>
						<button
							onClick={clearCart}
							className="flex-1 border border-zinc-700 py-4 rounded-md text-gray-400 hover:text-orange-500 hover:border-orange-500 text-sm tracking-widest uppercase transition-all duration-300"
						>
							CLEAR CART 🗑️
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
