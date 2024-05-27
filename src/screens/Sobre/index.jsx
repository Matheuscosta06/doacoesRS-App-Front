import { View, Text, Image } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { ScrollView } from 'react-native-gesture-handler'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.cardPrincipal}>
      <Image
        style={styles.fotoRS}
        source={require('../../../assets/mapa.png')}
      />
      <Text style={styles.sobreA}>Sobre a</Text>
      <Text style={styles.novaG}>NovaGenix</Text>
      <Text style={styles.solut}>Solutions</Text>
      </View>
      <View style={styles.cardObj}>
       <Text style={styles.tituloObj}>Um pouco sobre nosso objetivo com esse projeto:</Text>
       <Text style={styles.textObj}>Desde o início, a equipe de desenvolvedores sabia que criar um site para organizar doações no Rio Grande do Sul seria especial. Com especialistas em várias áreas, a missão era criar uma plataforma intuitiva e eficiente. O designer criou uma interface amigável, enquanto os desenvolvedores trabalharam no código e na infraestrutura. O gerente de projetos coordenava as tarefas, e o responsável pela comunicação lia feedbacks e conectava-se com ONGs e doadores. Superaram desafios técnicos e emocionais. No lançamento, ver as doações e pedidos de ajuda concretizados foi gratificante. O site continua a crescer, ajudando muitos gaúchos e mostrando o poder da tecnologia e da colaboração.</Text>
</View>
</ScrollView>
    </View>
  )
}