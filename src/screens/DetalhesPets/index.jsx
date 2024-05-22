import styles from './styles';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function DetalhesPets() {
    return (
        <LinearGradient
        colors={['#1DC59C', '#0E415F']}
        style={styles.container}
    >
        <View style={styles.tituloContainer}>
            <Text style={styles.primeiraLetra}>P</Text>
            <Text style={styles.titulo1}>ets</Text>
        </View>
    </LinearGradient>
    );
}

