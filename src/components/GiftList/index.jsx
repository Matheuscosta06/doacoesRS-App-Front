import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

const giftList = ({ setSelectedCategory, styles, products }) => {
    console.log(products);
    return (
        <View style={styles.containerbtn}>
            <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>
                <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.cardcontainer}>

                {products.map((product) => (
                    <TouchableOpacity onPress={() => navigation.navigate("giftDetails", { product })} style={styles.card} key={product.id}>
                        <Image source={`${product.image}`} style={styles.image} />
                        <Text style={styles.cardText}>{product.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default giftList