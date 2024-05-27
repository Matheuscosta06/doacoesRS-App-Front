import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";



export default function News02() {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
       <Image style={styles.imgNews} source={require('../../../assets/Noticia1.jpg')}/>
       <View style={styles.line01}>
      <Text style={styles.name}>Matheus Carvalho</Text>
      <Text style={styles.data}>29/5/2024</Text>
       </View>

       <View style={styles.body}>

       <View style={styles.header}>
       <Text style={styles.title}>Risco de deslizamentos ainda preocupa no RS</Text>
      <Text style={styles.desc}>Situação gera risco de novos deslizamentos em encostas urbanas e quedas de barreiras na margem de estradas no Rio Grande do Sul</Text>
       </View>

       <View style={styles.noticia}>
        <Text style={styles.noticiaText}>
        Um informe emitido pelo Laboratório de Análise e Processamento de Imagens de Satélites (Lapis), vinculado à Universidade Federal de Alagoas (Ufal), alerta para a iminência de novos deslizamentos em encostas urbanas e desprendimentos de terra ao longo das estradas no Rio Grande do Sul. Essa situação decorre da alta saturação do solo no estado. A região enfrenta o que já é considerada a pior calamidade climática de sua história, com volumes de chuvas muito acima da média para o período. De acordo com os especialistas, a umidade do solo é medida pela relação entre a quantidade de água presente no solo e o seu volume total, utilizando-se sensores específicos para determinar essa proporção. Quanto mais próximo de 1, ou 100%, maior o nível de saturação do solo.

Conforme o informe, diversas áreas do território gaúcho registram taxas de umidade do solo próximas ao ponto de saturação, em torno de 1 cm³/cm³. Isso indica que o solo não consegue mais absorver água, resultando no escoamento superficial de toda a precipitação, o que eleva o risco de inundações. O estudo destaca que certas regiões no extremo sudoeste do Rio Grande do Sul apresentam condições mais favoráveis, com menor umidade do solo em comparação com o centro-leste do estado.

Os cientistas afirmam que, se a cidade de Porto Alegre estivesse com o solo mais seco, parte da água da chuva já teria infiltrado no subsolo. Contudo, as chuvas constantes ocasionaram até mesmo a elevação da água pelos bueiros, inundando áreas que até então não haviam sido afetadas pelas enchentes históricas.
        </Text>
       </View>
       </View>

    </ScrollView>
  )
}