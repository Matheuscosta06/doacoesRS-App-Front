import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { useEffect, useState, useContext } from 'react';
import { GiftContext } from '../../contexts/GiftContext';

const GiftCart = () => {
    const [giftsLength, setGiftsLength] = useState(0);
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
            <Feather name="gift" size={48} color="#fff" style={styles.cartContainer} />
        </View>
    )
}

export default GiftCart;