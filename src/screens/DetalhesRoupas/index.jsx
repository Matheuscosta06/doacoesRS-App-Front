import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';

const apiURL = process.env.EXPO_PUBLIC_API_URL;

export default function DetalhesRoupas() {
    const [produtos, setProdutos] = useState([]);
    const [quantidades, setQuantidades] = useState({});
    const [scroll, setScroll] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/products/type/clothes`);
                setProdutos(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const incrementarQuantidade = (id) => {
        setQuantidades({
            ...quantidades,
            [id]: (quantidades[id] || 0) + 1,
        });
    };

    const decrementarQuantidade = (id) => {
        if (quantidades[id] > 1) {
            setQuantidades({
                ...quantidades,
                [id]: quantities[id] - 1,
            });
        }
    };

    return (
        <ScrollView>
            <LinearGradient
                colors={['#AD1DC5', '#4A0A3C']}
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

                <View style={styles.linhaLaranja2} />

                <View style={styles.productList}>
                    {produtos.map((produto) => (
                        <View style={styles.viewCardContainer} key={produto.id}>
                            <Image source={{ uri: produto.image }} style={styles.img} />

                            <View style={styles.desc}>
                                <Text style={styles.title}>{produto.name}</Text>
                                <Text style={styles.price}>R${produto.value}</Text>

                                <View style={styles.qtdProductsContainer}>
                                    <TouchableOpacity onPress={() => incrementarQuantidade(produto.id)} style={styles.buttons}>
                                        <Text style={styles.textButton}>+</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.qtd}>{quantidades[produto.id] || 1}</Text>
                                    <TouchableOpacity onPress={() => decrementarQuantidade(produto.id)} style={styles.buttons}>
                                        <Text style={styles.textButton}>-</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.addCart} onPress={() => navigation.navigate('Carrinho', { produto: produto, quantidade: quantidades[produto.id] || 1 })}>
                                    <Text style={styles.addCartText}>Adicionar ao carrinho</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </LinearGradient>
        </ScrollView>
    );
}
