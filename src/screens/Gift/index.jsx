import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Gift() {
  return (
    <View style={styles.container}>
      <Title title={'Gift today is beutiful day'} />
    </View>
  )
}