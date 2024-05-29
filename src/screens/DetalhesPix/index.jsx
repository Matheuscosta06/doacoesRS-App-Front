import { useState } from 'react';
import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetalhesPix() {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Detalhes do Pix</Text>
                <View style={styles.box}>
                    <Text style={styles.text}>O Rio Grande do Sul está passando por momentos difíceis e muitas famílias precisam de nossa ajuda. A solidariedade e a união são essenciais para superar desafios. Com um simples gesto, você pode fazer a diferença na vida de muitas pessoas.

                        Convidamos você a fazer um PIX e contribuir para a recuperação e apoio das famílias gaúchas. Sua doação, não importa o valor, será um alívio para aqueles que enfrentam dificuldades.</Text>
                </View>
                <View style={styles.Chaveeqr}>

                    <Image
                        style={styles.qr}
                        source={require('../../../assets/qr.png')}
                    />
                    <Text style={styles.text}>Chave PIX: 123.456.789-10</Text>

                    </View>
               
            </View>
        </ScrollView>
    );
}
