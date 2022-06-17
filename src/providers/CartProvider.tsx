import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types'
interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (id: string) => {
        const filtered = cart.filter(e => e.id !== id)
        setCart([...filtered])
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