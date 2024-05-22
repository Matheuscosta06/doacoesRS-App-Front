import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Category() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/MapRS.png')} style={styles.maps}>
        <Text style={styles.titulo}>O que doar?</Text>









      </ImageBackground>
    </View>
  )
}