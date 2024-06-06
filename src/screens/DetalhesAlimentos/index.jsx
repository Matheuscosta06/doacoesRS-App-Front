import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Cart from '../../components/Cart';

export default function DetalhesPets() {
    const [produtos, setProdutos] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [cardPopup, setCardPopup] = useState({});

    const {
        productsCart,
        addProduct,
        removeProduct,
    } = useContext(CartContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/products/type/food`);
                console.log(response.data.data);
                setProdutos(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(productsCart);
    }, [productsCart]);

    const add = (id) => {
        setQuantities({
            ...quantities,
            [id]: (quantities[id] || 0) + 1,
        });
    };

    const addMultiple = (id, amount) => {
        setShowPopup(true);
        setQuantities({
            ...quantities,
            [id]: (quantities[id] || 0) + amount,
        });
    };

    const remove = (id) => {
        if (quantities[id] > 0) {
            setQuantities({
                ...quantities,
                [id]: quantities[id] - 1,
            });
        }
    }

    const popUp = (id) => {
        setCardPopup(prevState => ({ ...prevState, [id]: !prevState[id] }));
    }

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Cart />

            <LinearGradient
                colors={['#FF0000', '#400A0A']}
                style={styles.container}
            >



            </LinearGradient>

        </View>

    );
}