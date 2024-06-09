import React from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { GiftContext } from '../../contexts/GiftContext';

export default function giftDetails({ route }) {
    const { product } = route.params
    const navigation = useNavigation();

    const [qtd, setQtd] = useState('');

    const { gifts, addGift } = useContext(GiftContext);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgContainer}>
                <Image source={`${product.image}`} style={styles.img} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.txt}>{product.type}</Text>
                <Text style={styles.txt}>{product.name}</Text>
                <Text style={styles.txt}>{product.description}</Text>
                <TextInput
                    style={styles.input}
                    value={qtd}
                    onChangeText={setQtd}
                    placeholder='Insira a quantidade desejada doar'
                />

                <TouchableOpacity style={styles.addDonations}>
                    <Text style={styles.txtDonations}>Adicionar Doação</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate("Gift")}>
                <AntDesign name="left" size={24} color="red" />
            </TouchableOpacity>
        </View>
    )
}
