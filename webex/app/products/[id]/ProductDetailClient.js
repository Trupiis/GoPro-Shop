"use client"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext";

const ProductDetailClient = ({product}) =>{
    const router = useRouter();

    const {addItemCart} = useCart()

    const handleAddToCart = () =>{
        console.log("Añadiendo al carrito:", product);
        addItemCart(product)
    }

    
    return(
        <div className="p-20 pt-10 min-h-screen bg-gradient-to-br from-[#260d30] to-[#0076c5] flex justify-center gap-5 flex-col">

        <div className="flex">
            <button className="flex gap-2" onClick={()=> router.push(`/products`)}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>Volver al catalogo
            </button>
        </div>

        <div className="flex gap-10 max-md:flex-col">
            <img src={product.thumbnail} alt={product.title} className="w-auto h-80 mt-4 max-md:h-auto" />

            <div className="flex flex-col space-y-7 mt-10">

                <h1 className="text-2xl font-bold ">{product.title}</h1>

                <p className="w-68">{product.description}</p>

                <span className="text-lg font-semibold">Precio: ${Math.floor(product.price)}</span>


                {/* COUNTER */}
            <button className="w-48 bg-[#131313] p-3 rounded-3xl mt-5" onClick={handleAddToCart}
                >Añadir al carrito</button>
        </div>
        </div>


        </div> 
    )
}

export default ProductDetailClient;