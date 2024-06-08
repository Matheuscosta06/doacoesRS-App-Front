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
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [cardPopup, setCardPopup] = useState(null);
    const [scroll, setScroll] = useState(false);

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
    }

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
    }




    return (
        <View style={{ flex: 1 }}>
            <Cart />
            <ScrollView scrollEnabled={scroll}>
                <LinearGradient
                    colors={['#FF0000', '#400A0A']}
                    style={styles.container}
                >

                    <Text>{JSON.stringify(productsCart)}</Text>

                    <View style={styles.productList}>
                        {
                            products ? (
                                products.map((product) => (

                                    <View>

                                        <TouchableOpacity onPress={() => popShow(product.id)} key={product.id}>
                                            <Image source={`${product.image}`} style={styles.img} />

                                            <View style={styles.desc}>
                                                <Text style={styles.title}>{product.name}</Text>
                                                <Text style={styles.price}>R${product.value}</Text>
                                            </View>
                                        </TouchableOpacity>

                                        {
                                            cardPopup === product.id && (
                                                <View style={styles.qtdProductsContainer}>
                                                    {
                                                        showPopup && (
                                                            <View style={styles.qtdProductsContainer}>
                                                                <TouchableOpacity onPress={() => add(product.id)} style={styles.buttons} >
                                                                    <Text style={styles.textButton}>+</Text>
                                                                </TouchableOpacity>
                                                                <Text style={styles.qtd}>{quantities[product.id] || 0}</Text>
                                                                <TouchableOpacity onPress={() => remove(product.id)} style={styles.buttons}>
                                                                    <Text style={styles.textButton}>-</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        )
                                                    }

                                                    <View style={styles.multipleButtonsContainer}>
                                                        <TouchableOpacity onPress={() => addMultiple(product.id, 2)} style={styles.multipleButtons} >
                                                            <Text style={styles.textButton}>+2</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => addMultiple(product.id, 6)} style={styles.multipleButtons} >
                                                            <Text style={styles.textButton}>+6</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => addMultiple(product.id, 12)} style={styles.multipleButtons} >
                                                            <Text style={styles.textButton}>+12</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    <TouchableOpacity onPress={() => addProduct(product.id, quantities[product.id] || 0) || setQuantities({})} style={styles.addCart}>
                                                        <Text style={styles.addCartText}>Adicionar ao carrinho</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            )
                                        }



                                    </View>



                                ))
                            ) : (
                                <Text>Carregando...</Text>
                            )
                        }
                    </View>


                </LinearGradient>
            </ScrollView>
        </View>

    );
}

{/* {
                                            showPopup && (
                                                <View style={styles.qtdProductsContainer}>
                                                    <TouchableOpacity onPress={() => add(product.id)} style={styles.buttons} >
                                                        <Text style={styles.textButton}>+</Text>
                                                    </TouchableOpacity>
                                                    <Text style={styles.qtd}>{quantities[product.id] || 0}</Text>
                                                    <TouchableOpacity onPress={() => remove(product.id)} style={styles.buttons}>
                                                        <Text style={styles.textButton}>-</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        }



                                        <View style={styles.multipleButtonsContainer}>
                                            <TouchableOpacity onPress={() => addMultiple(product.id, 2)} style={styles.multipleButtons} >
                                                <Text style={styles.textButton}>+2</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => addMultiple(product.id, 6)} style={styles.multipleButtons} >
                                                <Text style={styles.textButton}>+6</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => addMultiple(product.id, 12)} style={styles.multipleButtons} >
                                                <Text style={styles.textButton}>+12</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <TouchableOpacity onPress={() => addProduct(product.id, quantities[product.id] || 0) || setQuantities({})} style={styles.addCart}>
                                            <Text style={styles.addCartText}>Adicionar ao carrinho</Text>
                                        </TouchableOpacity>
 */}
