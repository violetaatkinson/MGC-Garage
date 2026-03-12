import Swal from "sweetalert2";
import Motos from "./Motos";
import React,{ useEffect, useState } from "react";

const MotosContainer = () => {
	
    const [motos, setMotos] = useState(null);
	
	useEffect(() => {
		const getMotos = async () => {
			const res = await fetch("https://69ac7e879ca639a5217f0cec.mockapi.io/motosmcj/motos");
			const data = await res.json();
			setMotos(data);
		};

		getMotos();
	}, []);

	return (
		<div>
			<Motos motos={motos} />
		</div>
	);
};

export default MotosContainer;
