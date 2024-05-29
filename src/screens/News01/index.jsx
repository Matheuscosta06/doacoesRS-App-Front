import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";



export default function News01() {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
       <Image style={styles.imgNews} source={require('../../../assets/Noticia1.jpg')}/>
       <View style={styles.line01}>
      <Text style={styles.name}>Matheus Gomes</Text>
      <Text style={styles.data}>27/5/2024</Text>
       </View>

       <View style={styles.body}>

       <View style={styles.header}>
       <Text style={styles.title}>124 casos de leptospirose são relatados</Text>
      <Text style={styles.desc}>4 mortes estão em investigação</Text>
       </View>

       <View style={styles.noticia}>
        <Text style={styles.noticiaText}>
        A Secretaria de Saúde do Rio Grande do Sul anunciou nesta segunda-feira (27) a confirmação de 124 casos de leptospirose desde o início das enchentes que têm assolado o estado gaúcho. Até o momento, registram-se quatro fatalidades relacionadas à doença, com mais 10 óbitos sob investigação.
Segundo o relatório emitido pelo órgão, foram notificados 1.380 casos, dos quais 542 foram descartados por meio de exames laboratoriais, enquanto 714 permanecem em fase de investigação. A leptospirose, provocada pela bactéria Leptospira e disseminada pela urina de roedores, pode ser contraída pelo contato com a água contaminada durante as inundações. Os sintomas típicos da enfermidade incluem febre de 38°C ou superior, dores de cabeça, lombares ou na panturrilha, além de conjuntivite. A progressão da leptospirose é marcada por sinais como tosse, insuficiência renal e hemorragias.
O Ministério da Saúde enfatiza a importância do tratamento imediato para os casos suspeitos de leptospirose no Rio Grande do Sul. (Com informações do UOL).
        </Text>
       </View>
       </View>

    </ScrollView>
  )
}