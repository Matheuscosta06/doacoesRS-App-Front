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
        const item = newGifts.find((item) => item.gift.id === gift.id);

        if (item.qtd > 1) {
            item.qtd -= 1;
        } else {
            newGifts.splice(newGifts.indexOf(item), 1);
        }
        setGifts(newGifts);
    };

    const cancelGift = (gift) => {
        const newGifts = [...gifts];
        const item = newGifts.find((item) => item.id === gift);

        newGifts.splice(newGifts.indexOf(item), 1);
        setGifts(newGifts);
    };


    return (
        <GiftContext.Provider value={{ gifts, addGift, removeGift, cancelGift }}>
            {children}
        </GiftContext.Provider>
    );

}