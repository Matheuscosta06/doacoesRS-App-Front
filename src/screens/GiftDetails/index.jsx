import React from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native-web'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function giftDetails({ route }) {
    const { product } = route.params
    const navigation = useNavigation();

    const [qtd, setQtd] = useState(null);

    return (
        <View>
            <Image source={`${product.image}`} style={styles.img} />
            <Text>{product.type}</Text>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <TextInput
                style={styles.input}
                value={qtd}
                onChangeText={setQtd}
                placeholder='Insira a quantidade desejada doar'
            />

            <TouchableOpacity onPress={() => navigation.navigate("Gift")}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
