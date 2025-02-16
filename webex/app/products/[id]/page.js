import { getProductsByCustomId } from "@/actions/getProductByCustomId";
import ProductDetailClient from "./ProductDetailClient";
/* import { useRouter } from "next/navigation"; */

export default async function ProductDetail({ params }) {
 /*    const router = useRouter() */
    const { id } = await params;

    if (!id) {
        return <h2 className="text-white text-center">Cargando...</h2>;
    }

    const product = await getProductsByCustomId(parseInt(params.id));

    if (!product) {
        return <h2 className="text-white text-center">Producto no encontrado</h2>;
    }

    return (
        <ProductDetailClient product={product}/>
    );
}
