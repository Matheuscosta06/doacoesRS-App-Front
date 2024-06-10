import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { GiftContext } from '../../contexts/GiftContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import GiftCart from '../../components/GiftCart';



const apiURL = process.env.EXPO_PUBLIC_API_URL;

export default function DetalhesPetGift() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [cardPopup, setCardPopup] = useState(null);
    const [scroll, setScroll] = useState(true);

    const navigation = useNavigation();
    const { gifts, addGift } = useContext(GiftContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/products/type/pet`);
                setProducts(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(gifts);
    }, [gifts]);

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
    const headleAddProduct = (product, quantity) => {
        if (quantity === 0) {
            addGift(product, 1);
        } else {
            addGift(product, quantity);
            setQuantities({});
        }
    };
    return (
        <View style={{ flex: 1,}}>
            <GiftCart />
            <LinearGradient colors={['#366ED8', '#045844']} style={styles.container}>
                <ScrollView>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.primeiraLetra}>P</Text>
                        <Text style={styles.titulo1}>ETS</Text>
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
                                        <TouchableOpacity style={styles.addCart} onPress={() => headleAddProduct(product, quantities[product.id] || 0) || setQuantities({})}>
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
                                            <Text>clique para selecionar e detalhar sua doação</Text>
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


