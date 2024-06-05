import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        <ScrollView>
            <LinearGradient
                colors={['#FF0000', '#400A0A']}
                style={styles.container}
            >
                <View style={styles.tituloContainer}>
                    <Text style={styles.primeiraLetra}>A</Text>
                    <Text style={styles.titulo1}>LIMENTOS</Text>
                </View>

                <View style={styles.linhaLaranja} />

                <View style={styles.subtitulocontainer}>
                    <Text style={styles.subtitulo}>DOAÇÕES</Text>
                </View>

                <View style={styles.linhaLaranja2} />

                <Text>{JSON.stringify(productsCart)}</Text>


                {produtos.map(produto => (
                    !cardPopup[produto.id] ? (
                        <TouchableOpacity onPress={() => popUp(produto.id)} key={produto.id} style={styles.containerProdutos}>
                            <Image source={`${produto.image}`} style={styles.imagem} />

                            <View style={styles.desc}>
                                <Text style={styles.tituloDesc}>{produto.name}</Text>
                                <Text style={styles.preco}>R${produto.value}</Text>
                            </View>
                        </TouchableOpacity>
                    ) :
                    <View style={styles.screen}>

                        <View key={produto.id} style={styles.cardInfo}>
                            <View style={styles.imgContainer}>
                                <Image source={`${produto.image}`} style={styles.imagem} />
                            </View>

                            <View style={styles.descContainer}>
                                <View style={styles.desc}>
                                    <Text style={styles.nameCard}>{produto.name}</Text>
                                    <Text style={styles.preco}>R${produto.value}</Text>
                                </View>


                                {
                                    showPopup && (
                                        <View style={styles.quantidadeProdutos}>
                                            <TouchableOpacity onPress={() => add(produto.id)} style={styles.mais} >
                                                <Text style={styles.maisButton}>+</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.quantidade}>{quantities[produto.id] || 0}</Text>
                                            <TouchableOpacity onPress={() => remove(produto.id)} style={styles.menos}>
                                                <Text style={styles.menosButton}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                                <View style={styles.multipleButtonsContainer}>
                                    <TouchableOpacity onPress={() => addMultiple(produto.id, 2)} style={styles.multipleButtons} >
                                        <Text style={styles.maisButton}>+2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addMultiple(produto.id, 6)} style={styles.multipleButtons} >
                                        <Text style={styles.maisButton}>+6</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addMultiple(produto.id, 12)} style={styles.multipleButtons} >
                                        <Text style={styles.maisButton}>+12</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity onPress={() => addProduct(produto.id, quantities[produto.id] || 0) || setQuantities({})} style={styles.addcarrinho}>
                                    <Text style={styles.addcarrinhoText}>Adicionar ao carrinho</Text>
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity onPress={() => { popUp(produto.id); setShowPopup(false); }} style={styles.exit}>
                                <AntDesign name="left" size={24} color="red" />
                            </TouchableOpacity>

                        </View>
                    </View>
                ))}
            </LinearGradient>
        </ScrollView>
    );
}