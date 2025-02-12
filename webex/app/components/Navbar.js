"use client"
import { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/provider/AuthProvider";
import Cart from "./Cart";

function Navbar () {
	
    const [isOpen, setIsOpen] = useState(false)
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isCartDesktop, setIsCartDesktop] = useState(false);


    const toggleNav = () => {
        setIsOpen(!isOpen)
		setIsCartOpen(false)
    }

	const toggleCart = () =>{
        setIsCartOpen(!isCartOpen)
		setIsOpen(false)
    }

	const toggleCartDesktop = () =>{
		setIsCartDesktop(!isCartDesktop)
	}

	const {loggedIn, HandleLogin, HandleLogout} = useContext(AuthContext)
	
    return(
    <div>
    <header className="bg-[#131313] text-white">
	<div className="items-center flex justify-center h-20 p-8 shadow-2xl">
		<ul className="items-center hidden gap-6 md:flex">
            <Link href="/" className="text-lg hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-150 ease-in" >INICIO</Link>
            <Link href="/products" className="text-lg hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-150 ease-in" >CATALOGO</Link>
            <Link href="/contact" className="text-lg hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-150 ease-in" >CONTACTO</Link>
			
			{loggedIn
				? <>
				<Link href="/" onClick={HandleLogout}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  				<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
				</svg>

				</Link>
				</>	

				:	<Link href="/login" className="text-lg flex gap-3 hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-150 ease-in" onClick={HandleLogout}>INGRESAR
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
				</svg>
				</Link>}

		</ul>

			<Cart isCartOpen={isCartOpen} toggleCart={toggleCart} className="md:pl-8"/>

									{/* BARS */}
		<button className="flex justify-end p-4 md:hidden text-2xl ml-auto" onClick={toggleNav}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>

	</div>
</header>

{/* SIDEBAR */}

<div className={`${isOpen ? "visible" : "hidden"} md:hidden absolute right-0 h-screen bg-[#131313] p-3 w-72`}>
		<ul className="pt-4 pb- space-y-6 text-2xl text-white">
			
			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

                    <Link href="/" className="text-xl" >INICIO</Link>
			</li>

			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

				<Link href="/products" className="text-xl" >CATALOGO</Link>
			</li>

		
			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">
			
                    <Link href="../../Contacto/Contacto.js" className="text-xl" > CONTACTO</Link>

			</li>

			{loggedIn
			?<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

                    <Link href="/login" className="text-xl" >MI CUENTA</Link>
			</li>

			:<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

			<Link href="/login" className="text-xl" >INGRESAR</Link>
			</li>
			}
			
		</ul>
	</div>
</div>
    )
}

export default Navbar;