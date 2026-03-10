import React from "react";
//import { useState, useEffect } from "react";
import ScreenList from "./ScreenList";

const screensInfo = [
	{
		id: 1,
		section: "Inventory",
		img: "/src/assets/t5.jpeg",
		href: "/motos",
		information: "Browse our collection of motorcycles",
	},
	{
		id: 2,
		section: "Fixer Upper",
		img: "/src/assets/fix.jpg",
		href: "/fixer-upper",
		information: "Restore your old bike",
	},
	{
		id: 3,
		section: "Schedule Service",
		img: "/src/assets/c.jpg",
		href: "/schedule-service",
		information: "Expert repairs and maintenance ",
	},
	{
		id: 4,
		section: "Parts Request",
		img: "/src/assets/b.jpg",
		href: "/parts-request ",
		information: "Source genuine parts for your motorcycle",
	},
	{
		id: 5,
		section: "Contact Us",
		img: "/src/assets/t.jpeg",
		href: "/contact",
		information: "Get in touch with our team",
	},
];

const ScreenContainer = () => {
	/* Ejemplo de como usar UseEffect (+ con APIS) y UseState

	const [screens, SetScreens] = useState([]);

	useEffect(() => {
		const getScreens = () =>
			new Promise((resolve) => {
				resolve(screensInfo);
			});

		getScreens()
			.then((res) => SetScreens(res))
			.catch((err) => console.log(err));
	}, []);
	
	*/ // creo la prop screen y le paso el array screensInfo screens: screensInfo y lo envía a ScreenList

	return <ScreenList screens={screensInfo} />;
};

export default ScreenContainer;
