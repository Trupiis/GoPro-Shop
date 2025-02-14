import { db } from "@/db/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getProductsByCustomId(customId) {

    const q = query(collection(db, "productos"), where("id", "==", customId));
    const  querySnapshot = await getDocs(q);

    if(querySnapshot.empty){
        console.error("No existe producto con ese id")
        return null
    }

    const product = querySnapshot.docs[0].data();
    console.log("Producto encontrado:", product)
    return product;
}

