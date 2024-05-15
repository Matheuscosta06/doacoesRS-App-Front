import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={'Home today is beutiful day'} />
    </View>
  )
}



