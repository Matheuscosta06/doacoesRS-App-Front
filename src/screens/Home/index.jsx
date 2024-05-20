import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import Carousel from 'react-native-snap-carousel'

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={'Home today is beutiful day'} />
      <Carousel
      //propriedades
       //arquivos para add no carrossel:
      data={}
      //Componente da imagem (formato):
      renderItem={}
      //o tamanho da tela:
      sliderWidth={}
      //o tamanho do item
      itemHeight={}
      useScrollView={true}
       />
    </View>
  )
}



