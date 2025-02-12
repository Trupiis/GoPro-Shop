function Cart ({isCartOpen, toggleCart, className}) {
    return(
        <div className={className}>
            <button className="border-2 border-[#09f] rounded-full p-2" onClick={toggleCart}>
			    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path   strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
			    </svg>
			</button>

            <div className={`fixed top-0 bg-[#131313] h-screen w-72 shadow-xl z-50 
                            p-5
                            ${isCartOpen ? "left-0" : "hidden"} 
                            transition-transform duration-300`}>
                

            <button className="border-2 border-[#09f] rounded-full p-2" onClick={toggleCart}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

			</button>

                <h2 className="text-white p-4">Carrito de Compras</h2>
            </div>

        </div>
    )
}

export default Cart;