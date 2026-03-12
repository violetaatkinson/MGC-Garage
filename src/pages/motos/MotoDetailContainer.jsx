import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MotoDetail from "./MotoDetail";

const MotoDetailContainer = () => {
	const { id } = useParams();
	const [moto, setMoto] = useState(null);

	useEffect(() => {
		const getMoto = async () => {
			const res = await fetch(`https://69ac7e879ca639a5217f0cec.mockapi.io/motosmcj/motos/${id}`);
			const data = await res.json();
			setMoto(data);
		};

		getMoto();
	}, [id]);

	if (!moto) {
		return <p className="text-white text-center mt-20">Loading...</p>;
	}

	return <MotoDetail moto={moto} />;
};

export default MotoDetailContainer;
