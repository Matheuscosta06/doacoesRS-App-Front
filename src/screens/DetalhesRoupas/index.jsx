import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export default function Page() {
    const [quantidades, setQuantidades] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            // Fetch data here
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
                [id]: quantidades[id] - 1,
            });
        }
    };

    return (
        <ScrollView style={styles.container}>
            <LinearGradient
                colors={['#AD1DC5', '#4A0A3C']}
                style={styles.gradient}
            >
                <View style={styles.tituloContainer}>
                    <Text style={styles.primeiraLetra}>R</Text>
                    <Text style={styles.titulo1}>OUPAS</Text>
                </View>
                {/* Rest of your components here */}
            </LinearGradient>
        </ScrollView>
    );
}