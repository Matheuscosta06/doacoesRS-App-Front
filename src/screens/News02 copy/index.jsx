import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";



export default function News03() {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
       <Image style={styles.imgNews} source={require('../../../assets/Noticia1.jpg')}/>
       <View style={styles.line01}>
      <Text style={styles.name}>João Oliveira</Text>
      <Text style={styles.data}>28/5/2024</Text>
       </View>

       <View style={styles.body}>

       <View style={styles.header}>
       <Text style={styles.title}>Ciclone no Rio Grande do Sul provoca vento e chuva forte em cidades gaúchas já atingidas pelas cheias</Text>
      <Text style={styles.desc}>Ciclone extratropical é esperado nesta segunda e terça-feira em várias partes do Rio Grande do Sul. A Defesa Civil do estado orienta que a população não retorne para locais alagados ou inundados e recomenda atenção para quem mora em áreas de encosta ou declive</Text>
       </View>

       <View style={styles.noticia}>
        <Text style={styles.noticiaText}>
        A formação de um ciclone extratropical em alto-mar provocará chuvas e ventos fortes em algumas regiões do Rio Grande do Sul nesta segunda-feira (27/5) e terça-feira (28/5). Ademais, espera-se que o mar fique agitado, havendo risco de ressaca ao longo da costa gaúcha. A Defesa Civil do estado aconselha que a população evite retornar a áreas alagadas ou inundadas e destaca a importância da atenção para aqueles que residem em regiões de encostas ou declives acentuados, devido ao perigo de deslizamentos de terra.

Na terça-feira, prevê-se a continuidade de chuvas localmente fortes sobre o litoral gaúcho. As precipitações acumuladas devem variar entre 30 e 50 mm/dia no sul e leste. Além disso, os ventos de sudoeste/sul ganharão intensidade no litoral sul e médio, assim como na região leste, podendo atingir rajadas superiores a 60 km/h. Conforme a Defesa Civil, na quarta-feira (29/5), é esperado que o tempo permaneça instável na faixa leste, com chuviscos ou chuva fraca.

O governador Eduardo Leite (PSDB-RS) alertou para possíveis transtornos nos municípios já afetados por alagamentos ou pelo comprometimento do sistema de drenagem, devido às chuvas trazidas pelo ciclone extratropical.

"Na região leste do estado, prevê-se um volume de chuvas que, segundo a Sala de Situação, não resultará em uma elevação significativa nos níveis de rios ou do Guaíba, por exemplo. Contudo, municípios que já estão com seus sistemas de drenagem bastante impactados, como é o caso de Porto Alegre, podem enfrentar transtornos consideráveis devido às chuvas desta segunda e parte da terça-feira", afirmou o governador.

"Locais como Pelotas, São José do Norte, São Lourenço do Sul e Rio Grande, que já têm áreas invadidas pela lagoa, podem enfrentar problemas adicionais nesta segunda-feira. Por isso, pedimos a todos que, sempre que possível, evitem deslocamentos dentro das cidades. Estamos mobilizando equipes nas ruas, incluindo segurança pública, bombeiros, Defesa Civil e Brigada Militar, para oferecer suporte aos municípios, manter as situações sob controle e prestar assistência às pessoas mais necessitadas. Entretanto, é crucial contar com a colaboração de todos e evitar exposição a riscos desnecessários", acrescentou Eduardo Leite.
        </Text>
       </View>
       </View>

    </ScrollView>
  )
}