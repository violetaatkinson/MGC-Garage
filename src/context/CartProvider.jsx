import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		const exist = cart.find((prod) => prod.id === item.id);

		if (exist) {
			const updatedCart = cart.map((prod) =>
				prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod,
			);

			setCart(updatedCart);
		} else {
			setCart([...cart, { ...item, quantity: 1 }]);
		}
	};

	const removeItem = (id) => {
		const updatedCart = cart.filter((item) => item.id !== id);

		setCart(updatedCart);
	};

  const clearCart = () => {
    setCart([]);
};

const totalPrice = cart.reduce((acc, item) => {
  return acc + item.cost * item.quantity;
}, 0);

	return (
		<CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, totalPrice }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
