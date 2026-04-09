import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useMemo } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { useCheckout } from "../../hook/UseCheckout";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import Contact from "./Contact";

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
	const { handleCheckout, loading } = useCheckout();

	const cartData = useMemo(() => location.state?.cart || [], [location.state]);
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
		if (fromCart && !done && cartData.length > 0) {
			const itemsList = cartData
				.map((item) =>
					item.category === "service"
						? `• ${item.type} ($${Number(item.cost).toLocaleString()})`
						: `• ${item.brand} ${item.model} ${item.year} ($${Number(item.cost).toLocaleString()})`,
				)
				.join("\n");

			const timer = setTimeout(() => {
				setFormData((prev) => ({
					...prev,
					message: `Hi! I'm interested in the following:\n\n${itemsList}\n\nTotal: $${(cartTotal * 1.07).toLocaleString()}`,
				}));
			}, 0);

			return () => clearTimeout(timer);
		}
	}, [fromCart, cartData, cartTotal, done]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const orderId = await handleCheckout({
				formData,
				cartData,
				cartTotal,
				clearCart,
				navigate,
			});

			setDone(true);

			Swal.fire({
				title: "ORDER SENT!",
				html: `
                <p style="color:#a1a1aa; font-size:14px; letter-spacing:0.15em; margin-bottom:12px">
                    We'll contact you shortly.
                </p>
                <p style="color:#ff6b00; font-size:16px; font-weight:bold; letter-spacing:0.1em">
                    Thank you for your order!
                </p>
                <p style="color: #ffffff; font-size: 14px; margin-top: 12px; font-weight: 500;">
    				Your Order ID: <span style="color: #a1a1aa ;">${orderId}</span>
				</p>
            `,
				background: "#18181b",
				color: "#fff",
				confirmButtonText: "OK",
				confirmButtonColor: "#ff6b00",
				showClass: { popup: "animate__animated animate__fadeInDown" },
				hideClass: { popup: "animate__animated animate__fadeOutUp" },
			});

			if (!fromCart) {
				setFormData({ name: "", email: "", phone: "", message: "" });
			}
		} catch (error) {
			console.error(error);

			Swal.fire({
				title: "ERROR",
				text: "Something went wrong.",
				icon: "error",
			});
		}
	};

	return (
		<Contact
			details={details}
			swalStyles={swalStyles}
			formData={formData}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			loading={loading}
		/>
	);
};

export default ContactContainer;
