import { createContext, useEffect, useState } from "react";

export const GiftContext = createContext();

export default function GiftProvider({ children }) {
    const [gifts, setGifts] = useState([]);

    const addGift = (giftID, qtd) => {
        const newGifts = [...gifts];
        const item = newGifts.find((item) => item.id === giftID);

        if (!item) {
            newGifts.push({ id: giftID, qtd: qtd });
        } else {
            item.qtd += qtd;
        }
        setGifts(newGifts);

    };

    const removeGift = (giftID) => {
        const newGifts = [...gifts];
        const item = newGifts.find((item) => item.id === giftID);

        if (item.qtd > 1) {
            item.qtd--;
            setGifts(newGifts);
        } else {
            const arryFiltred = newGifts.filter((item) => item.id !== giftID);
            setGifts([...arryFiltred]);
        }
    };

    return (
        <GiftContext.Provider value={{ gifts, addGift, removeGift }}>
            {children}
        </GiftContext.Provider>
    );

}