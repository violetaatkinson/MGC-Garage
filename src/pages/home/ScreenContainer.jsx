import React from "react";
import ScreenList from "./ScreenList";

const screensInfo = [
	{
		id: 1,
		section: "Inventory",
		img: "../../assets/t5.jpeg",
		href: "/motos",
		information: "Browse our collection of motorcycles",
	},
	{
		id: 2,
		section: "Fixer Upper",
		img: "../../assets/fix.jpg",
		href: "/fixer-upper",
		information: "Restore your old bike",
	},
	{
		id: 3,
		section: "Schedule Service",
		img: "../../assets/c.jpg",
		href: "/schedule-service",
		information: "Expert repairs and maintenance ",
	},
	{
		id: 4,
		section: "Parts Request",
		img: "../../assets/b.jpg",
		href: "/parts-request",
		information: "Source genuine parts for your motorcycle",
	},
	{
		id: 5,
		section: "Contact Us",
		img: "../../assets/t.jpeg",
		href: "/contact",
		information: "Get in touch with our team",
	},
];

const ScreenContainer = () => {


	return <ScreenList screens={screensInfo} />;
};

export default ScreenContainer;
