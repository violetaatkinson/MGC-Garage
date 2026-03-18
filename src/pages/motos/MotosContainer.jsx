import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Motos from "./Motos";
import { getMotos } from "../../firebase/db";

const MOCKAPI_URL ="https://69ac7e879ca639a5217f0cec.mockapi.io/motosmcj/motos";

const MotosContainer = () => {
	const [motos, setMotos] = useState(null);

	useEffect(() => {
		const fetchMotos = async () => {
			try {
				// 1 — intenta Firestore primero
				const data = await getMotos();
				setMotos(data);
				console.log(data)
			} catch (error) {
				console.warn("Firestore failed, using MockAPI fallback:", error);
				try {
					// 2 — si falla, usa MockAPI
					const res = await fetch(MOCKAPI_URL);
					const data = await res.json();
					setMotos(data);
				} catch (fallbackError) {
					console.error("Both sources failed:", fallbackError);
					setMotos([]); // carrito vacío para no romper la UI
				}
			}
		};

		fetchMotos();
	}, []);

	return (
		<div>
			<Motos motos={motos} />
		</div>
	);
};

export default MotosContainer;
