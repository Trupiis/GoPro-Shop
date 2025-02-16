"use client"
import CartProvider from "./CartContext";
import AuthContextProvider from "@/provider/AuthProvider";

const ContextWrapper = ({children}) =>{
    return(

        <AuthContextProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </AuthContextProvider>
    )
}

export default ContextWrapper;