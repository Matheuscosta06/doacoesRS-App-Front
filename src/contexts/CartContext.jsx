import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {


    const [productsCart, setProductsCart] = useState([]);

    const addProduct = (productParams, quantity) => {
        const newProductsCart = [...productsCart];

        const item = newProductsCart.find((item) => item.product.id === productParams.id);

        if (!item) {
            newProductsCart.push({ product: productParams, qtd: quantity });
        } else {
            item.qtd += quantity;
        }
        setProductsCart(newProductsCart);
    };

    const removeProduct = (product) => {
        const newProductsCart = [...productsCart];
        const item = newProductsCart.find((item) => item.product.id === product.id);

        if (item.qtd > 1) {
            item.qtd -= 1;
        } else {
            newProductsCart.splice(newProductsCart.indexOf(item), 1);
        }
        setProductsCart(newProductsCart);
    };

    const cancelProduct = (product) => {
        const newProductsCart = [...productsCart];
        const item = newProductsCart.find((item) => item.product.id === product.id);

        newProductsCart.splice(newProductsCart.indexOf(item), 1);
        setProductsCart(newProductsCart);
    };
    return (
        <CartContext.Provider value={{ productsCart, addProduct, removeProduct, cancelProduct }}>
            {children}
        </CartContext.Provider>
    );
}
