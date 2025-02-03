import Title from "../components/Title";

const Home = () => {
    return(
        <div className="pb-20 min-h-screen bg-gradient-to-br from-[#260d30] to-[#0076c5]">
                                {/* TITULO */}
            <div className="flex flex-col">
                <Title children={"GoPro"}/>
                <span className="mx-auto text-3xl font-thin text-white"> Be a Hero!</span>
            </div>

                                {/* HERO13 */}
            <div className="ml-20 mt-28 flex text-white">
                <img src="https://static.gopro.com/assets/blta2b8522e5372af40/bltf83a6ab7df7c2ec6/66a7ddf2c3ff6a30f409bfac/04-1-clp-featured-H13-1920-1280-png.png" className="w-96 drop-shadow-2xl"></img>
                <div className="mt-10 ml-10">
                    <span className="text-5xl font-bold"> HERO13  Black</span>

                    <p className="mt-5"> GoPro Hero 13 Black, es la mejor elección para capturar todas tus aventuras
                    </p>

                    <button className="w-28 bg-[#131313] p-2 rounded-3xl mt-10">Ver más</button>
                </div>
            </div>

                            {/* VENTANAS */}

            <div className="flex gap-5">
            <div className="relative overflow-hidden mt-44 m-20 shadow-2xl w-full h-96 rounded-3xl">
                <img src="https://shop.rodrifle.com.au/cdn/shop/files/pdp-helmet-mount-image07-1920-2x.webp?v=1704859641&width=1200">
                </img>
                
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 bg-[#f0f0f0] p-2 rounded-3xl">Ver más</button>
            </div>

            </div>
        </div>
    )
}

export default Home;