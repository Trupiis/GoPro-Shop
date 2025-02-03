"use client"
import { useState } from "react";
import Link from "next/link";

function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return(
    <div>
    <header className="bg-[#131313] text-white">
	<div className="items-center flex justify-between h-20 mx-auto p-8 shadow-2xl">
		<h1 className="text-4xl font-extralight">GoPro</h1>

		<ul className="hidden gap-10 md:flex">
            <Link href="/" className="text-lg hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-200 ease-in" >INICIO</Link>
            <Link href="/product" className="text-lg hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-200 ease-in" >CATALOGO</Link>
            <Link href="/contact" className="text-lg hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-200 ease-in" >CONTACTO</Link>
            <Link href="/login" className="text-lg flex gap-3 hover:border-b-4 hover:border-[#09f] hover:animate-pulse duration-200 ease-in" >MI CUENTA
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
			</svg>
			</Link>
		</ul>

		<button className="flex justify-end p-4 md:hidden text-2xl" onClick={toggleNav}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>

{/* SIDEBAR */}

<div className={`${isOpen ? "visible" : "hidden"} md:hidden absolute right-0 h-screen bg-[#909090] p-3 w-72`}>
		<ul className="pt-4 pb- space-y-6 text-2xl text-white">
			
			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

                    <Link href="/" className="text-xl" >INICIO</Link>
			</li>

			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

				<Link href="/product" className="text-xl" >CATALOGO</Link>
			</li>


			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">

                    <Link href="/login" className="text-xl" >MI CUENTA</Link>
			</li>

			<li className="flex space-x-4 items-center p-4 pl-2 border-b-2">
			
                    <Link href="../../Contacto/Contacto.js" className="text-xl" > CONTACTO</Link>

			</li>
		</ul>
	</div>
</div>
    )
}

export default Navbar;