import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

const getMotos = async () => {
    const querySnapshot = await getDocs(collection(db, "motos")); 
    
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export { db, getMotos };
