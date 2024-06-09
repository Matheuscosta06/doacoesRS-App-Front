import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export default function DetalhesPix() {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <LinearGradient colors={['#37E467', '#17422B']} style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.txt1}>Dinheiro</Text>
                    <hr style={styles.linha1}></hr>
                    <Text style={styles.txt2}>Doações</Text>
                    <hr style={styles.linha2}></hr>
                    <View style={styles.box}>
                        <Text style={styles.text}>
                        Este pix é destinado as despesas de frete, custos de armazentos de produtos
                        </Text>
                    </View>
                    <Text style={styles.txtinho}>qualquer valor é bem vindo❤</Text>
                    <View style={styles.Chaveeqr}>
                        <Image
                            style={styles.qr}
                            source={require('../../../assets/qr.png')}
                        />
                      
                    </View>

                    <Text style={styles.textchave}>Chave PIX: 123.456.789-10</Text>
                </View>
                </LinearGradient>
        </ScrollView>
    );
}
