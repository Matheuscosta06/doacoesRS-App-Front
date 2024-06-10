import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { DonationContext } from '../../contexts/DonationContext';
import { GiftContext } from '../../contexts/GiftContext';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import PoPError from '../../components/PoPError';
import { Picker } from '@react-native-picker/picker';
import successImage from '../../../assets/success.png';

// Componente para o pop-up de sucesso
const PoPSuccess = ({ msg, setMsgSuccess }) => {
    return (
        <View style={popUpStyles.overlay}>
            <View style={popUpStyles.popup}>
                <Image source={successImage} style={popUpStyles.image} />
                <Text style={popUpStyles.msg}>{msg}</Text>
                <TouchableOpacity onPress={() => setMsgSuccess(false)}>
                    <Text style={popUpStyles.closeButton}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const popUpStyles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    msg: {
        marginBottom: 15,
        fontSize: 16,
    },
    closeButton: {
        fontSize: 18,
        color: '#FFA41B',
    },
});

export default function GiftCart() {
    const apiURL = process.env.EXPO_PUBLIC_API_URL;
    const { createDonation, createGiftItem, createGift } = useContext(DonationContext);
    const { gifts, removeGift, addGift, cancelGift } = useContext(GiftContext);
    const [localGifts, setLocalGifts] = useState(gifts);
    const [giftDetails, setGiftDetails] = useState([]);
    const [popUpError, setPopUpError] = useState(null);
    const [popUpSuccess, setPopUpSuccess] = useState(false); // Estado para o pop-up de sucesso
    const [selectedLocation, setSelectedLocation] = useState("location1");

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
            setPopUpError('Você não possui itens para doação.');
            return;
        } else {
            const responseDonation = await createDonation();
            const donationId = responseDonation.donations.id;
            for (const gift of localGifts) {
                console.log(gift.gift);
                const responseGift = await createGift(gift.gift.type, gift.gift.name, gift.gift.description, gift.gift.image);
                await createGiftItem(responseGift.gift.id, donationId, gift.qtd, selectedLocation);
                lastGift(gift);
            }
            setPopUpSuccess(true); // Exibir pop-up de sucesso
            gifts.length = 0;
            cancelGift();
            
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
                <Picker
                    selectedValue={selectedLocation}
                    onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item style={styles.pickerTxt} label="Senai Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540" value="Senai Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540" />
                    <Picker.Item style={styles.pickerTxt} label="Sesi Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540" value="Sesi Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540" />
                    <Picker.Item style={styles.pickerTxt} label="Prefeitura de Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540" value="Prefeitura de Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540" />
                </Picker>
                <TouchableOpacity style={styles.btnFinalizar} onPress={sendGifts}>
                    <Text style={styles.txtFinalizar}>DOAR</Text>
                </TouchableOpacity>
            </ScrollView>
            {popUpError && <PoPError msg={popUpError} setMsgError={setPopUpError} />}
            {popUpSuccess && <PoPSuccess msg="Doação realizada com sucesso!" setMsgSuccess={setPopUpSuccess} />}
        </View>
    );
}
