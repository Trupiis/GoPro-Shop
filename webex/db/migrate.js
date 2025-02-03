import {addDoc, collection} from "firebase/firestore"
import { db } from "./firebase"
import { productos} from "./productos"

export async function migrateProducts() {

    const productsCollection = collection(db, "productos")

    productos.forEach((producto)=>{
        addDoc(productsCollection, producto)
        .then(()=>{
            console.log("Producto agregado con exito", producto.id)
        })
    })
    
}