import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MotoDetail from "./MotoDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/db";

const MOCKAPI_URL = "https://69ac7e879ca639a5217f0cec.mockapi.io/motosmcj/motos";

const MotoDetailContainer = () => {
	const { id } = useParams();
	const [moto, setMoto] = useState(null);

	useEffect(() => {
		const getMoto = async () => {
			try {
				// 1 — busca en Firestore por ID
				const docRef = doc(db, "motos", id);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setMoto({ id: docSnap.id, ...docSnap.data() });
				} else {
					throw new Error("Not found in Firestore");
				}
			} catch (error) {
				console.warn("Firestore failed, trying MockAPI:", error);
				try {
					// 2 — fallback a MockAPI con IDs numéricos
					const res = await fetch(`${MOCKAPI_URL}/${id}`);
					if (!res.ok) throw new Error("Not found in MockAPI");
					const data = await res.json();
					setMoto(data);
				} catch (fallbackError) {
					console.error("Both sources failed:", fallbackError);
					setMoto(null);
				}
			}
		};

		getMoto();
	}, [id]);

	if (!moto) {
		return <p className="text-white text-center mt-20">Loading...</p>;
	}

	return <MotoDetail moto={moto} />;
};

export default MotoDetailContainer;
