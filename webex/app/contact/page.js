const Contact = () => {
    return(
        <div className="flex justify-center pt-10 pb-20 min-h-screen bg-gradient-to-br from-[#260d30] to-[#0076c5]">
            
            <section className="bg-[#f0f0f0ec] shadow-2xl w-full m-20  rounded-xl
            grid grid-cols-2 max-w-5xl">

            <div className="p-10 justify-center items-center ">
                <form className="space-y-6 w-full">
                    <h2 className="text-3xl mb-5 text-center">¡Contactanos!</h2>

                    <div className="flex flex-col w-full">
                    <label htmlFor="username" className="bloc font-medium">Nombre</label>
                    <input type="text" name="username" id="username" placeholder="Nombre" className="w-full px-4 py-3 rounded-md " />
                    </div>   

                    <div className="flex flex-col w-full">
                    <label htmlFor="email" className="bloc font-medium">Correo electrónico</label>
                    <input type="text" name="email" id="email" placeholder="Correo electrónico" className="w-full px-4 py-3 rounded-md " />
                    </div>   
                    
                    <div className="flex flex-col w-full">
                    <label htmlFor="message" className="bloc font-medium"> Mensaje</label>
                    <textarea type="textarea" name="message" id="message" placeholder="Aqui su mensaje" className="w-full px-4 py-3 rounded-md resize-none " />
                    </div>    

                    <button className="block w-full p-3 text-center bg-[#09f] rounded-2xl ">Enviar mensaje</button>
                </form>
            </div>
            <div className="bg-black text-center rounded-tr-xl rounded-br-xl p-10 border-l-4 border-[#09f] space-y-6">
                <span className="text-white text-3xl mb-10">¡Ubicanos!</span>

            <div className="text-white text-start">
                <span>Dirección:</span><p>Av. Sta. Fe 1825 27, C1123 AAA</p>
                <p> Argentina, Buenos Aires</p>
            </div>
            <div className="text-white text-start">
                <span>Telefono:</span><p>+54 1135534478</p>
            </div>


            </div>

    </section>
    </div>
    )
}

export default Contact;