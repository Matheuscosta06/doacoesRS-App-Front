import { View, Text, Image } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.cardPrincipal}>
      <Image
        style={styles.fotoRS}
        source={require('../../../assets/mapa.png')}
      />
      <Text style={styles.sobre}>Sobre a</Text>
      <Text>NovaGenix</Text>
      <Text>Solutions</Text>
      </View>

    </View>
  )
}