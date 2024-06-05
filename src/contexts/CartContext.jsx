import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {


    const [productsCart, setProductsCart] = useState([]);

    const addProduct = (productID, quantity) => {
        const newProductsCart = [...productsCart];
    
        const item = newProductsCart.find((item) => item.id === productID);
    
        if (!item) {
            newProductsCart.push({ id: productID, qtd: quantity });
        } else {
            item.qtd += quantity;
        }
        setProductsCart(newProductsCart);
    };

    const removeProduct = (productID) => {
        const newProductsCart = [...productsCart];

        const item = newProductsCart.find((item) => item.id === productID);

        if (item.qtd > 1) {
            item.qtd--;
            setProductsCart(newProductsCart);
        } else {
            const arryFiltred = newProductsCart.filter((item) => item.id !== productID);
            setProductsCart([...arryFiltred]);
        }
    };
    return (
        <CartContext.Provider value={{ productsCart, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    );
}
