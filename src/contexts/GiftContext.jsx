import { createContext, useEffect, useState } from "react";

export const GiftContext = createContext();

export default function GiftProvider({ children }) {
    const [gifts, setGifts] = useState([]);

    const addGift = (gift, qtd) => {
        const newGifts = [...gifts];
        const item = newGifts.find((item) => item.gift.id === gift.id);

        if (!item) {
            newGifts.push({ gift: gift, qtd: qtd });
        } else {
            item.qtd += qtd;
        }
        setGifts(newGifts);

    };

    const removeGift = (gift) => {
        const newGifts = [...gifts];
        const item = newGifts.find((item) => item.id === gift);

        if (item.qtd > 1) {
            item.qtd--;
            setGifts(newGifts);
        } else {
            const arryFiltred = newGifts.filter((item) => item.id !== gift);
            setGifts([...arryFiltred]);
        }
    };

    const cancelGift = (gift) => {
        const newGifts = [...gifts];
        const arryFiltred = newGifts.filter((item) => item.id !== gift);
        setGifts([...arryFiltred]);
    };

    return (
        <GiftContext.Provider value={{ gifts, addGift, removeGift, cancelGift }}>
            {children}
        </GiftContext.Provider>
    );

}