import { useState } from "react";
import { createOrder } from "../pages/cart/OrderCheckout";

const WHATSAPP_NUMBER = "18055745916";

export const useCheckout = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleCheckout = async ({
		formData,
		cartData,
		cartTotal,
		clearCart,
		navigate,
	}) => {
		setLoading(true);
		setError(null);

		try {
			// 1. Formatear items
			const items = cartData.map((item) => ({
				id: item.id,
				category: item.category,
				cost: item.cost,
				...(item.category === "service"
					? { type: item.type, detail: item.detail }
					: {
							brand: item.brand,
							model: item.model,
							year: item.year,
					  }),
			}));

			// 2. Crear orden en Firestore
			const orderId = await createOrder({
				buyer: {
					name: formData.name,
					email: formData.email,
					phone: formData.phone || "Not provided",
				},
				items,
				subtotal: cartTotal,
				message: formData.message,
			});

			// 3. WhatsApp
			const whatsappMessage = encodeURIComponent(
				`*MCJ GARAGE ORDER #${orderId}*\n\n` +
					`*Name:* ${formData.name}\n` +
					`*Email:* ${formData.email}\n\n` +
					`*Message:*\n${formData.message}`,
			);

			window.open(
				`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
				"_blank"
			);

			// 4. Limpiar carrito
			clearCart();

			// 5. Navegar
			navigate("/");

			return orderId;
		} catch (err) {
			console.error(err);
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return { handleCheckout, loading, error };
};