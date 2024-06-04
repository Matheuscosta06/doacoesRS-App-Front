import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';

export default function DetalhesPets() {
    const [quantidade, setQuantidade] = useState(1);
    const [produtos, setProdutos] = useState([]);

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
                    <View key={produto.id} style={styles.containerProdutos}>
                        <Image source={`${produto.image}`} style={styles.imagem} />

                        <View style={styles.desc}>
                            <Text style={styles.tituloDesc}>{produto.name}</Text>
                            <Text style={styles.preco}>R${produto.value}</Text>
                            <View style={styles.quantidadeProdutos}>
                                <TouchableOpacity onPress={() => addProduct(produto)} style={styles.mais} >
                                    <Text style={styles.maisButton}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantidade}>{quantidade}</Text>
                                <TouchableOpacity onPress={() => removeProduct(produto)} style={styles.menos}>
                                    <Text style={styles.menosButton}>-</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.addcarrinho}>
                                <Text style={styles.addcarrinhoText}>Adicionar ao carrinho</Text>
                            </View>
                        </View>
                    </View>
                ))}
        </LinearGradient>
        </ScrollView>
    );
}
