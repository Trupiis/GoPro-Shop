import { getProductsByCustomId } from "@/actions/getProductByCustomId";

export default async function ProductDetail({ params }) {
    const { id } = await params; // 👈 Aseguramos que `params` se resuelva

    if (!id) {
        return <h2 className="text-white text-center">Cargando...</h2>;
    }

    console.log("🔍 Buscando producto con ID:", id); // Para depuración

    const product = await getProductsByCustomId(parseInt(params.id));

    if (!product) {
        return <h2 className="text-white text-center">Producto no encontrado</h2>;
    }

    return (
        <div className="p-20 min-h-screen bg-gradient-to-br from-[#260d30] to-[#0076c5] flex justify-center gap-10">
            <img src={product.thumbnail} alt={product.title} className="w-auto h-80 mt-4" />

            <div className="flex flex-col space-y-7 mt-10">

                <h1 className="text-2xl font-bold ">{product.title}</h1>

                <p className="w-68">{product.description}</p>

                <span className="text-lg font-semibold">Precio: ${Math.floor(product.price)}</span>

                <button className="w-28 bg-[#131313] p-2 rounded-3xl mt-10">Ver más</button>
            </div>
        </div>
    );
}
