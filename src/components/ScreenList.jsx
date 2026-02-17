import React from "react";
import Screen from "./Screen";

// envio cada objeto individual 
const ScreenList = ({ screens }) => {
	return (
		<div className="flex flex-col ">
			{screens.map((screen) => {
				return <Screen screen={screen} key={screen.id} />;
			})}
		</div>
	);
};

export default ScreenList;
