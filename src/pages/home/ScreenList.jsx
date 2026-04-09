import React from "react";
import Screen from "./Screen";
import Loader from "../../components/Loader"

// envio cada objeto individual 
const ScreenList = ({ screens }) => {
	
	if (!screens || screens.length === 0) {
		return <Loader />;
	}

	return (
		<div className="flex flex-col ">
			{screens.map((screen) => {
				return <Screen screen={screen} key={screen.id} />;
			})}
		</div>
	);
};

export default ScreenList;
