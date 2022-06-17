import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types'
interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (product: Product) => {
        const newArray = [...cart]
        const index = newArray.indexOf(product)
        newArray.splice(index, 1)
        setCart(newArray)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('No hay provider arriba de este componente')
    return ctx
}