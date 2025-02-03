import { db } from "@/db/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
        const searchParams = req.nextUrl.searchParams;
        const camProducts = searchParams.get("product");
        const category = searchParams.get("category");

        const productCollection = collection(db, "products");

        const queryProductsContraints = camProducts ? [where("product", "==", camProducts)] : [];
        const queryCategoryConstraints = category ? [where("category", "==", category)] : [];
        const productsQuery = query(productsCollection, ...queryProductsContraints, ...queryCategoryConstraints);

        const snapshot = await getDocs(productsQuery);

        const productoListo = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return NextResponse.json({
            message: "Productos obtenidos con éxito",
            error: false,
            payload: productoListo,
          });
        } catch (error) {
            console.error("Error obteniendo productos:", error);
            return NextResponse.json({
              message: "Error al obtener los productos",
              error: true,
              payload: null,
            });
          }
    }
    export async function POST(req) {
        try {
          const body = await req.json();
          console.log("POST request data:", body);
      
          return NextResponse.json({ message: "POST recibido correctamente", data: body });
        } catch (error) {
          console.error("Error procesando POST:", error);
          return NextResponse.json({
            message: "Error procesando la solicitud",
            error: true,
          });
        }
      }
    
