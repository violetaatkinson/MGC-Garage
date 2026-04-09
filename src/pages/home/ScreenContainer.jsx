import React from "react";
import ScreenList from "./ScreenList";


import t5 from "../../assets/t5.jpeg";
import fix from "../../assets/fix.jpg";
import c from "../../assets/c.jpg";
import b from "../../assets/b.jpg";
import t from "../../assets/t.jpeg";

const screensInfo = [
	{
		id: 1,
		section: "Inventory",
		img: t5,
		href: "/motos",
		information: "Browse our collection of motorcycles",
	},
	{
		id: 2,
		section: "Fixer Upper",
		img: fix,
		href: "/fixer-upper",
		information: "Restore your old bike",
	},
	{
		id: 3,
		section: "Schedule Service",
		img:c,
		href: "/schedule-service",
		information: "Expert repairs and maintenance ",
	},
	{
		id: 4,
		section: "Parts Request",
		img: b,
		href: "/parts-request",
		information: "Source genuine parts for your motorcycle",
	},
	{
		id: 5,
		section: "Contact Us",
		img: t,
		href: "/contact",
		information: "Get in touch with our team",
	},
];

const ScreenContainer = () => {


	return <ScreenList screens={screensInfo} />;
};

export default ScreenContainer;
