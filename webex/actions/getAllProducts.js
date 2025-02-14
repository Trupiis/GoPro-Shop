/* import { db } from "@/db/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getAllProducts() {
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
        console.log("🆔 ID:", doc.id, "➡️", doc.data());
    });
}

 */