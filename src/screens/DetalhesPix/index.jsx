import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function DetalhesPix() {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.mainContainer}>
            <ImageBackground 
                source={require('../../../assets/imagepx.jpg')} 
                style={styles.background}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Detalhes do Pix</Text>
                    <View style={styles.Chaveeqr}>
                        <Image
                            style={styles.qr}
                            source={require('../../../assets/qr.png')}
                        />
                        <Text style={styles.text1}>Chave PIX: 123.456.789-10</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>
                            O Rio Grande do Sul está passando por momentos difíceis e muitas famílias precisam de nossa ajuda. 
                            A solidariedade e a união são essenciais para superar desafios. Com um simples gesto, você pode fazer 
                            a diferença na vida de muitas pessoas.
                            {'\n\n'}
                            Convidamos você a fazer um PIX e contribuir para a recuperação e apoio das famílias gaúchas. Sua doação, 
                            não importa o valor, será um alívio para aqueles que enfrentam dificuldades.
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}
