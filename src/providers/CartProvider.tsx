import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types'
interface CartContextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setProducts([...products, product])
    }

    const removeFromCart = (id: string) => {
        setProducts([...products.filter(e => e.id !== id)])
    }

    return (
        <CartContext.Provider value={{ products, setProducts, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('No hay provider arriba de este componente')
    return ctx
}