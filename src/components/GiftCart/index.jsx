import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { useEffect, useState, useContext } from 'react';
import { GiftContext } from '../../contexts/GiftContext';
import { useNavigation } from '@react-navigation/native';

const GiftCart = () => {
    const [giftsLength, setGiftsLength] = useState(0);
    const navigation = useNavigation();
    const {
        gifts,
    } = useContext(GiftContext);

    useEffect(() => {
        console.log(gifts.length);
        setGiftsLength(gifts.length);
    }, [gifts]);


    return (
        <View style={styles.container} >
            {
                giftsLength > 0 && (
                    <Text style={styles.cartText}>{giftsLength}</Text>
                )
            }
            <TouchableOpacity onPress={() => navigation.navigate('GiftCart')} >
                <Feather name="gift" size={48} color="#fff" style={styles.cartContainer} />
            </TouchableOpacity>
        </View>
    )
}

export default GiftCart;