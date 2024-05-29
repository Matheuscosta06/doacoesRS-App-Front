import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DetalhesPets() {
    const [quantidade, setQuantidade] = useState(1);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/products/type/pet`);
                console.log(response.data.data);
                setProdutos(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    console.log(produtos);

    const incrementarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const decrementarQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    const navigation = useNavigation();

    return (
        <ScrollView>
            <LinearGradient
                colors={['#1DC59C', '#0E415F']}
                style={styles.container}
            >
                <View style={styles.tituloContainer}>
                    <Text style={styles.primeiraLetra}>P</Text>
                    <Text style={styles.titulo1}>ETS</Text>
                </View>

                <View style={styles.linhaLaranja} />

                <View style={styles.subtitulocontainer}>
                    <Text style={styles.subtitulo}>DOAÇÕES</Text>
                </View>

                <View style={styles.linhaLaranja2} />

                {produtos.map(produto => (
                    <View key={produto.id} style={styles.containerProdutos}>
                        <Image source={`${produto.image}`} style={styles.imagem} />

                        <View style={styles.desc}>
                            <Text style={styles.tituloDesc}>{produto.name}</Text>
                            <Text style={styles.preco}>R${produto.value}</Text>
                            <View style={styles.quantidadeProdutos}>
                                <TouchableOpacity onPress={incrementarQuantidade} style={styles.mais} >
                                    <Text style={styles.maisButton}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantidade}>{quantidade}</Text>
                                <TouchableOpacity onPress={decrementarQuantidade} style={styles.menos}>
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
