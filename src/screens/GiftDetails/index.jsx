import React from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { GiftContext } from '../../contexts/GiftContext';

export default function giftDetails({ route }) {
    const { product } = route.params
    const navigation = useNavigation();

    const [qtd, setQtd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const errors = [];

    const { gifts, addGift } = useContext(GiftContext);

    const heandleAddGift = () => {
        if (!validate()) {
            alert(errMsg);
            return;
        }
        addGift(product, qtd);
        console.log(gifts);
        setQtd('');
    }
    const validate = () => {
        if (qtd == '') {
            errors.push('Preencha a quantidade desejada')
        }
        if (isNaN(qtd)) {
            errors.push('A quantidade deve ser um número')
        }
        if (qtd < 1) {
            errors.push('A quantidade deve ser maior que 0')
        }
        if (errors.length > 0) {
            setErrMsg(errors.join('\n'));
            return false;
        }
        return true;
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrMsg("");
        }, 6000);

        return () => clearTimeout(timeout);
    }, [errMsg]);


    return (
        <View style={styles.mainContainer}>

            <View style={styles.imgContainer}>
                <Image source={`${product.image}`} style={styles.img} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.txt}>{product.type}</Text>
                <Text style={styles.txt}>{product.name}</Text>
                <Text style={styles.txt}>{product.description}</Text>
                <Text style={styles.txt}>{JSON.stringify(gifts)}</Text>
                <TextInput
                    style={styles.input}
                    value={qtd}
                    onChangeText={setQtd}
                    placeholder='Insira a quantidade desejada doar'
                />

                <TouchableOpacity onPress={() => heandleAddGift()} style={styles.addDonations}>
                    <Text style={styles.txtDonations}>Adicionar Doação</Text>
                </TouchableOpacity>
                <Text style={styles.errMsg}>{errMsg}</Text>
            </View>
            <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate("Gift")}>
                <AntDesign name="left" size={24} color="red" />
            </TouchableOpacity>
        </View>
    )
}
