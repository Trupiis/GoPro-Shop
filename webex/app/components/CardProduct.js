"use client"

import { Router, useRouter } from "next/navigation";

function CardProduct ({id, title, descripcion, price, thumbnail}){
    const precioSinDecimales = Math.floor(price)
    const router = useRouter()


    return(
        <div className="flex flex-col place-content-center  p-10 rounded-xl mx-auto bg-[#1313133a] w-72 h-auto">
            <img src={thumbnail}></img>

            <div className="pt-5 flex flex-col text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm"></p>
                <span>Precio: ${precioSinDecimales}</span>
                <button className="w-full bg-[#09f] p-2 rounded-3xl mt-4" onClick={()=> router.push(`/products/${id}`)}>Ver más</button>
            </div>
        </div>
    )
}

export default CardProduct;