function CardProduct (){
    return(
        <div className="flex flex-col place-content-center pt-0 p-8 rounded-xl  mx-auto bg-[#1313133a] w-1/3 h-3/4">
            <img src="https://static.gopro.com/assets/blta2b8522e5372af40/bltf83a6ab7df7c2ec6/66a7ddf2c3ff6a30f409bfac/04-1-clp-featured-H13-1920-1280-png.png" className="w-72 mx-auto pt-7 drop-shadow-2xl"></img>

            <div className="pt-10 flex flex-col text-white">
                <h2 className="text-3xl pb-5 font-bold">HERO13  Black</h2>
                <p className="text-sm pb-2">GoPro Hero 13 Black, es la mejor elección para capturar todas tus aventuras</p>
                <span>Precio: $40</span>
                <button className="w-full bg-[#09f] p-2 rounded-3xl mt-4">Ver más</button>
            </div>
        </div>
    )
}

export default CardProduct;