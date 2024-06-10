import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { DonationContext } from '../../contexts/DonationContext';
import { GiftContext } from '../../contexts/GiftContext';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

export default function GiftCart() {
    const apiURL = process.env.EXPO_PUBLIC_API_URL;
    const { createDonation, createGiftItem, createGift } = useContext(DonationContext);
    const { gifts, removeGift, addGift, cancelGift } = useContext(GiftContext);
    const [localGifts, setLocalGifts] = useState(gifts);
    const [giftDetails, setGiftDetails] = useState([]);

    useEffect(() => {
        console.log(localGifts);
    }, [gifts]);


    useFocusEffect(
        useCallback(() => {
            setLocalGifts(gifts);
        }, [gifts])
    );

    const incrementQuantity = (gift) => {
        addGift(gift.gift, 1);
    };

    const decrementQuantity = (gift) => {
        removeGift(gift.gift);
    };

    const lastGift = (gift) => {
        cancelGift(gift.gift);
    };

    const sendGifts = async () => {
        if (localGifts.length == 0) {
            console.log(localGifts);
            alert('Adicione produtos ao carrinho');
            return;
        }
        else {
            const responseDonation = await createDonation();
            const donationId = responseDonation.donations.id;
            for (const gift of localGifts) {
                console.log(gift.gift);
                const responseGift = await createGift(gift.gift.type, gift.gift.name, gift.gift.description, gift.gift.image);
                await createGiftItem(responseGift.gift.id, donationId, gift.qtd);
            }
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.tituloContainer}>
                    <Text style={styles.primeiraLetra}>C</Text>
                    <Text style={styles.titulo1}>ARRINHO</Text>
                </View>
                <View style={styles.linhaLaranja} />
                <View style={styles.subtitulocontainer}>
                    <Text style={styles.subtitulo}>DOAÇÕES</Text>
                </View>

                <View style={styles.linhaLaranja2} />
                <View style={styles.containerProduct}>
                    {localGifts.map((gift) => (
                        <View style={styles.card} key={gift.gift.id}>
                            <TouchableOpacity style={styles.x} onPress={() => lastGift(gift)}>
                                <Feather name="x" size={38} color="#FFA41B" />
                            </TouchableOpacity>

                            <Image source={{ uri: gift.gift.image }} style={styles.image} />
                            <Text style={styles.titleName}>{gift.gift.name}</Text>
                            <Text style={styles.txtPrice}>R${gift.gift.value}</Text>
                            <View style={styles.containerQntd}>
                                <TouchableOpacity onPress={() => incrementQuantity(gift)}>
                                    <FontAwesome5 name="plus" size={20} color="#fff" />
                                </TouchableOpacity>
                                <TextInput style={styles.input} value={String(gift.qtd)} />
                                <TouchableOpacity onPress={() => decrementQuantity(gift)}>
                                    <Entypo name="minus" size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.btnDoar} onPress={sendGifts}>
                    <Text style={styles.txtDoar}>DOAR</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );

}