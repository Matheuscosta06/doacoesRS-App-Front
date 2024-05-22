import styles from './styles';
import { View, Text } from 'react-native';

export default function DetalhesPets() {
    return (
        <View style={styles.container}>
            <View style={styles.tituloContainer}>
                <Text styles={styles.primeiraLetra}>P</Text>
                <Text styles={styles.titulo1}>ets</Text>
            </View>
        </View>
    );
}

