import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Cart from '../../components/Cart';
import styles from './styles';



const apiURL = process.env.EXPO_PUBLIC_API_URL;

export default function DetalhesHigiene() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [cardPopup, setCardPopup] = useState(null);
    const [scroll, setScroll] = useState(true);

    const navigation = useNavigation();
    const { productsCart, addProduct } = useContext(CartContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/products/type/hygiene`);
                setProducts(response.data.data);
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
    };

    const popShow = (id) => {
        if (cardPopup === id) {
            setCardPopup(null);
            setScroll(true);
            console.log(cardPopup);
        } else {
            setCardPopup(id);
            setScroll(false);
            console.log(cardPopup);
        }
    };
    return (
        <View style={{ flex: 1,}}>
            <Cart />
            <LinearGradient colors={['#36C5D8', '#093338']} style={styles.container}>
                <ScrollView>
                    <Text>{JSON.stringify(productsCart)}</Text>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.primeiraLetra}>H</Text>
                        <Text style={styles.titulo1}>IGÊNE</Text>
                    </View>

                    <View style={styles.linhaLaranja} />

                    <View style={styles.subtitulocontainer}>
                        <Text style={styles.subtitulo}>DOAÇÕES</Text>
                    </View>

                    <View style={styles.linhaLaranja2} />

                    <View style={styles.productList}>
                        {products.length ? (
                            products.map((product) =>
                                cardPopup === product.id ? (
                                    <View style={styles.viewCardContainer} key={product.id}>
                                        <View style={styles.productImageContainer}>
                                            <Image source={{ uri: product.image }} style={styles.img} />
                                        </View>
                                        {showPopup && (
                                            <View style={styles.qtdProductsContainer}>
                                                <TouchableOpacity onPress={() => add(product.id)} style={styles.buttons}>
                                                    <Text style={styles.textButton}>+</Text>
                                                </TouchableOpacity>
                                                <Text style={styles.qtd}>{quantities[product.id] || 0}</Text>
                                                <TouchableOpacity onPress={() => remove(product.id)} style={styles.buttons}>
                                                    <Text style={styles.textButton}>-</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                        <View style={styles.multipleButtonsContainer}>
                                            <TouchableOpacity onPress={() => addMultiple(product.id, 2)} style={styles.multipleButtons}>
                                                <Text style={styles.textButton}>+2</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => addMultiple(product.id, 6)} style={styles.multipleButtons}>
                                                <Text style={styles.textButton}>+6</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => addMultiple(product.id, 12)} style={styles.multipleButtons}>
                                                <Text style={styles.textButton}>+12</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={styles.addCart} onPress={() => addProduct(product.id, quantities[product.id] || 0) || setQuantities({})}>
                                            <Text style={styles.addCartText}>Adicionar ao carrinho</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.arrowBack} onPress={() => popShow(product.id)}>
                                            <AntDesign name="left" size={24} color="#FF6347" />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <TouchableOpacity style={styles.productCard} onPress={() => popShow(product.id)} key={product.id}>
                                        <Image source={{ uri: product.image }} style={styles.img2} />
                                        <View style={styles.desc}>
                                            <Text style={styles.title}>{product.name}</Text>
                                            <Text style={styles.price}>R${product.value}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            )
                        ) : (
                            <Text>Carregando...</Text>
                        )}
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}


{/* <LinearGradient
colors={['#36C5D8', '#093338']}
style={styles.container}
>
<View style={styles.tituloContainer}>
    <Text style={styles.primeiraLetra}>R</Text>
    <Text style={styles.titulo1}>OUPAS</Text>
</View>

<View style={styles.linhaLaranja} />

<View style={styles.subtitulocontainer}>
    <Text style={styles.subtitulo}>DOAÇÕES</Text>
</View>

<View style={styles.linhaLaranja2} /> */}