import React, { useState } from "react";
import Swal from "sweetalert2";
import Fixer from "./Fixer";

const motoInfo = [
	{ name: "brand", label: "Brand" },
	{ name: "model", label: "Model" },
	{ name: "year", label: "Year" },
	{
	  name: "condition",
	  label: "Condition",
	  options: ["Excellent", "Good", "Fair", "Poor / Non-running"],
	},
	{ name: "description", label: "Describe Your Bike" },
];

const contactInfo = [
	{ name: "phone", label: "Phone" },
	{ name: "email", label: "Email" },
];

const initialState = {
	brand: "",
	model: "",
	year: "",
	condition: "",
	description: "",

	phone: "",
	email: "",
};

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

const FixerContainer = () => {
	const [fixFData, setfixFData] = useState( initialState );

	const handleChange = (e) => {
		const { name, value } = e.target;

		setfixFData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		Swal.fire({
            title: "Request Submitted!",
            html: `We'll evaluate your <strong style="color:#f97316; font-weight:600">${fixFData.brand} ${fixFData.model}</strong> and get back to you soon!`,
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

		setfixFData(initialState);
	};

	return (
		<div>
			<Fixer 
                motoInfo={motoInfo}
                contactInfo={contactInfo}
                fixFData={fixFData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                swalStyles={swalStyles}
            />
		</div>
	);
};

export default FixerContainer;
