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
    const { createDonation, createGiftItem } = useContext(DonationContext);
    const { gifts, removeGift, addGift, cancelGift } = useContext(GiftContext);
    const [localGifts, setLocalGifts] = useState(gifts);
    const [giftDetails, setGiftDetails] = useState([]);

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
        } else {
            const responseDonation = await createDonation();
            const donationId = responseDonation.donations.id;
            localGifts.map(async (gift) => {
                await createGiftItem(gift.gift.id, donationId, gift.qtd);
            });
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
                    {/* {localGifts.map((gift) => (
                        <View style={styles.card} key={gift.gift.id}>
                            <Image source={{ uri: `${apiURL}/uploads/${gift.gift.image}` }} style={styles.image} />
                            <Text style={styles.name}>{gift.gift.name}</Text>
                            <Text style={styles.price}>R$ {gift.gift.price}</Text>
                            <View style={styles.qtdContainer}>
                                <TouchableOpacity style={styles.btnQtd} onPress={() => decrementQuantity(gift)}>
                                    <Feather name="minus" size={20} color="#283444" />
                                </TouchableOpacity>
                                <TextInput style={styles.qtd} value={String(gift.qtd)} />
                                <TouchableOpacity style={styles.btnQtd} onPress={() => incrementQuantity(gift)}>
                                    <Feather name="plus" size={20} color="#283444" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btnRemove} onPress={() => lastGift(gift)}>
                                <FontAwesome5 name="trash-alt" size={20} color="#283444" />
                            </TouchableOpacity>
                        </View>
                    ))} */}
                </View>

                <TouchableOpacity style={styles.btnDoar} onPress={sendGifts}>
                    <Text style={styles.txtDoar}>DOAR</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );

}