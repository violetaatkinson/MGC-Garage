import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,} from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import Contact from "./Contact";

const WHATSAPP_NUMBER = "18055745916";

const details = [
	{
		section: "Location",
		info: ["123 Racing Boulevard,", "Los Angeles, CA 90001"],
		icon: FaMapMarkerAlt,
	},
	{
		section: "Hours",
		info: [
			"Monday - Friday: 3:00 PM - 6:00 PM",
			"Saturday: 10:00 AM - 4:00 PM",
			"Sunday: Closed",
		],
		icon: FaClock,
	},
	{ section: "Email", info: ["contact@mcjgarage.com"], icon: FaEnvelope },
	{ section: "Phone", info: ["(555) 123-4567"], icon: FaPhoneAlt },
];

const swalStyles = `
  .swal2-popup {
    background: #1a1f29 !important;
    border: 1px solid #2a2f3a;
    border-radius: 22px;
    color: #e1e8ed;
    font-family: "Raleway", sans-serif;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
  }
  .swal2-title {
    font-family: "Anton SC", sans-serif;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .swal2-html-container {
    color: #8899a6;
    font-size: 1.05rem;
    line-height: 1.6;
  }
  .swal2-backdrop-show {
    backdrop-filter: blur(6px);
    background: rgba(15, 20, 25, 0.75) !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill {
    -webkit-text-fill-color: #d1d5db;
    -webkit-box-shadow: 0 0 0px 1000px #1F1F22 inset;
    transition: background-color 5000s ease-in-out 0s;
    caret-color: #f97316;
  }
`;

const ContactContainer = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { clearCart } = useContext(CartContext);

	const cartData = location.state?.cart || [];
	const cartTotal = location.state?.totalPrice || 0;
	const fromCart = cartData.length > 0;

	const [done, setDone] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	useEffect(() => {
		if (fromCart && !done) {
			const itemsList = cartData
				.map((item) =>
					item.category === "service"
						? `• ${item.type} ($${Number(item.cost).toLocaleString()})`
						: `• ${item.brand} ${item.model} ${item.year} ($${Number(item.cost).toLocaleString()})`,
				)
				.join("\n");

			setFormData((prev) => ({
				...prev,
				message: `Hi! I'm interested in the following:\n\n${itemsList}\n\nTotal: $${(cartTotal * 1.07).toLocaleString()}`,
			}));
		}
	}, [done]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// 1 — WHATSAPP
		const whatsappMessage = encodeURIComponent(
			`*MCJ GARAGE INQUIRY*\n\n` +
				`*Name:* ${formData.name}\n` +
				`*Email:* ${formData.email}\n` +
				`*Phone:* ${formData.phone || "Not provided"}\n\n` +
				`*Message:*\n${formData.message}`,
		);
		window.open(
			`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
			"_blank",
		);


		Swal.fire({
			title: "MESSAGE SENT!",
			html: `
				<p style="color:#a1a1aa; font-size:13px; letter-spacing:0.15em; line-height:1.8">
					Thank you, <strong style="color:#d1d5db">${formData.name}</strong>!<br/>
					We'll reach out to you shortly via WhatsApp or email.
				</p>
			`,
			icon: "success",
			background: "#18181b",
			color: "#fff",
			confirmButtonText: "BACK TO HOME",
			confirmButtonColor: "#ff6b00",
		}).then(() => {
			setDone(true);
			if (fromCart) {
				clearCart();
				navigate("/");
			} else {
				setFormData({ name: "", email: "", phone: "", message: "" });
			}
		});

		// 3 — FIRESTORE en segundo plano
		try {
			const order = {
				buyer: {
					name: formData.name,
					email: formData.email,
					phone: formData.phone || "Not provided",
				},
				items: fromCart
					? cartData.map((item) => ({
							id: item.id,
							category: item.category,
							cost: item.cost,
							...(item.category === "service"
								? { type: item.type, detail: item.detail }
								: { brand: item.brand, model: item.model, year: item.year }),
						}))
					: [],
				subtotal: cartTotal,
				tax: parseFloat((cartTotal * 0.07).toFixed(2)),
				total: parseFloat((cartTotal * 1.07).toFixed(2)),
				message: formData.message,
				date: serverTimestamp(),
				status: "pending",
			};
			await addDoc(collection(db, "orders"), order);
		} catch (error) {
			console.error("Firestore error:", error);
		}
	};

	return (
		<Contact
			details={details}
			swalStyles={swalStyles}
			formData={formData}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};

export default ContactContainer;
