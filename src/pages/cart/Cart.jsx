import React, { useContext } from "react";
import EmptyCart from "../../components/EmptyCart";
import { useNavigate } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import ButtonHome from "../../components/ButtonHome";
import HeaderPage from "../../components/HeaderPage";


const Cart = () => {
	const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

	const navigate = useNavigate(); 

	const sendRequest = () => {
        Swal.fire({
            title: "READY TO BUY ?",
            html: `
                <p style="color:#a1a1aa; font-size:13px; letter-spacing:0.15em; margin-bottom:16px">
                    You'll be redirected to leave your contact info and we'll reach out via WhatsApp.
                </p>
                <p style="color:#ff6b00; font-size:18px; font-weight:bold; letter-spacing:0.1em">
                    Total: $${(totalPrice * 1.07).toLocaleString()}
                </p>
            `,
            background: "#18181b",
            color: "#fff",
            confirmButtonText: "YES, CONTINUE →",
            cancelButtonText: "GO BACK",
            showCancelButton: true,
            confirmButtonColor: "#ff6b00",
            cancelButtonColor: "#3f3f46",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/contact", { state: { cart, totalPrice } });
            }
        });
    };

	if (cart.length === 0) {
		return (
			<EmptyCart/>
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
						<button
							  onClick={sendRequest}
							 className="group flex-1 bg-orange-500 hover:bg-orange-600 py-4 rounded-md text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
							
							CHAT TO BUY
							<FaComments className="text-white text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
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
