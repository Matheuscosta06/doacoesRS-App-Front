import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Title title={'Sobre today is beutiful day'} />
    </View>
  )
}