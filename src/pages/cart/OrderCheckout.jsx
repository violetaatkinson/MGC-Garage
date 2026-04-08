import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/db";

export const createOrder = async ({ buyer, items, subtotal, message }) => {
	const tax = parseFloat((subtotal * 0.07).toFixed(2));
	const total = parseFloat((subtotal * 1.07).toFixed(2));

	const order = {
		buyer,
		items,
		subtotal,
		tax,
		total,
		message,
		date: serverTimestamp(),
		status: "pending",
	};

	const docRef = await addDoc(collection(db, "orders"), order);

	return docRef.id; 
};