import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Service from "./Service";

const services = [
	{
		id: "1",
		type: "Oil Change",
		detail: "Full synthetic oil change with filter replacement",
		cost: "89",
	},
	{
		id: "2",
		type: "Tire Change & Repair",
		detail: "Tire mounting, balancing, and puncture repair",
		cost: "149",
	},
	{
		id: "3",
		type: "Brake Repair & Replacement",
		detail: "Pads, rotors, fluid flush, and line inspection",
		cost: "249",
	},
	{
		id: "4",
		type: "Engine Repair & Rebuild",
		detail: "Diagnostics, repair, and full engine rebuilds",
		cost: "899",
	},
	{
		id: "5",
		type: "Suspension & Alignment",
		detail: "Fork service, shock adjustment, and alignment",
		cost: "349",
	},
	{
		id: "6",
		type: "Electrical Diagnosis & Repair",
		detail: "Wiring, stator, battery, and ECU diagnostics",
		cost: "199",
	},
	{
		id: "7",
		type: "Customization & Upgrades",
		detail: "Exhaust, handlebars, lighting, and performance mods",
		cost: "499",
	},
];

const contactCustomer = [
	{ name: "name", label: "Full Name" },
	{ name: "phone", label: "Phone" },
	{ name: "email", label: "Email" },
	{ name: "date", label: "Preferred Date" },
];

const initialState = {
	selectedServices: [],
	name: "",
	phone: "",
	email: "",
	date: "",
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

const ServiceContainer = () => {
	const [scheduleService, setScheduleService] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setScheduleService((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		Swal.fire({
			title: "Request Submitted!",
			html: `You're all set for <strong style="color:#f97316; font-weight:600">${scheduleService.date} </strong>.<br> Our team will reach out soon to confirm your appointment.`,
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
		});

		setScheduleService(initialState);
	};

	const handleServiceToggle = (service) => {
        // ↑ Recibe el objeto service completo
		setScheduleService((prev) => { // prev es el estado anterior
             //   Por cada elemento (s) del array, compara s.id con service.id, si encuentra 1 devuelve el obj
			const exists = prev.selectedServices.find((s) => s.id === service.id);

			if (exists) { // ↑ Si exists tiene valor (el servicio YA estaba seleccionado) , lo sacamos del array
				return {
					...prev,
					selectedServices: prev.selectedServices.filter(
                        // ↑ .filter() crea un NUEVO array con solo los elementos que cumplen la condición
						(s) => s.id !== service.id,
                        //   s.id !== service.id → "quedáte con todos EXCEPTO el que tiene este id"
					),
				};
			}

            // ↑ Si exists es undefined (el servicio NO estaba seleccionado)
            //   → lo AGREGAMOS al array
			return {
				...prev,
				selectedServices: [...prev.selectedServices, service],
                // ↑ Spread del array anterior + el nuevo servicio al final
			};
		});
	};

     // el array de servicios elegidos / llamamos reduce() sobre ese array
	const total = scheduleService.selectedServices.reduce((acc, service) => {
		return acc + Number(service.cost.replace("$", ""));
	}, 0); 
    // acc → el acumulador, empieza en 0
    // service → el elemento actual del array en cada vuelta

	return (
		<div>
			<Service
				services={services}
				contactCustomer={contactCustomer}
				swalStyles={swalStyles}
				scheduleService={scheduleService}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleServiceToggle={handleServiceToggle}
                total={total}
			/>
		</div>
	);
};

export default ServiceContainer;
