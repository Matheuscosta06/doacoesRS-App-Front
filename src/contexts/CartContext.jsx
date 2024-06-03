import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {


    const [productsCart, setProductsCart] = useState([]);

    const addProduct = (id) => {
        const newProductsCart = [...productsCart];

        const item = newProductsCart.find((item) => item.id === id);

        if (!item) {
            newProductsCart.push({ id, qtd: 1 });
            setProductsCart(newProductsCart);
        } else {
            item.qtd++;
        }
        setProductsCart(newProductsCart);
    };

    const removeProduct = (id) => {
        const newProductsCart = [...productsCart];

        const item = newProductsCart.find((item) => item.id === id);

        if (item.qtd > 1) {
            item.qtd--;
            setProductsCart(newProductsCart);
        } else {
            const arryFiltred = newProductsCart.filter((item) => item.id !== id);
            setProductsCart([...arryFiltred]);
        }
    };
    return (
        <CartContext.Provider value={{ productsCart, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    );
}
