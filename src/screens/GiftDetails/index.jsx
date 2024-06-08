import React from 'react'
import { View,Text } from 'react-native-web'

export default function giftDetails({ route }) {
    const { product } = route.params

    return (
        <View>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>R$ {product.value}</Text>
        </View>
    )
}
