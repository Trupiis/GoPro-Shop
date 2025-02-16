import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const CartProvider = ({children}) =>{
    
    const [items, setItems] = useState([])


    const addItemCart = (product) => {
        setItems((currentItems) => {
            const itemsExists = currentItems.find((item) => item.id === product.id);
    
            let updatedItems;
            if (itemsExists) {
                updatedItems = currentItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedItems = [...currentItems, { ...product, quantity: 1 }];
            }
    
            console.log("Estado actualizado del carrito:", updatedItems); // Esto debería mostrar el carrito actualizado
            return updatedItems;
        });
    };
    
    

    const removeItemCart = (product) =>{
        setItems((currentItems)=> 
            currentItems.filter((item)=>
            item.id !== product.id))}
    

    const updateQuantity = (productId, quantity) => {
        setItems((currentItems) =>
        currentItems.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        )
    } 

    return(
        <CartContext.Provider value={{addItemCart, removeItemCart, updateQuantity, items}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;