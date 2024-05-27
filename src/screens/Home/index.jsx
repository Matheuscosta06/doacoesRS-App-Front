import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
      <Image
          source={require("../../../assets/MapRS.png")}
          style={styles.imgHeader}
        />
        <View style={styles.titleHeader}>
        <Text style={styles.title0}>Ajude o</Text>
        <Text style={styles.title01}>Rio Grande do Sul</Text>
        </View>

        <View style={styles.btnHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Doe Agora</Text>
        </TouchableOpacity>
        </View>


      </View>

      <View style={styles.phrase}>
      <Text style={styles.phrase0}>Seu gesto, nossa força:</Text>
      <Text style={styles.phrase01}>doar hoje, construir amanhã.</Text>
      </View>

      <View style={styles.btn_doacoes}>
      <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button_doar}
        >
          <Text style={styles.buttonText_doar}>Cadastre sua doação</Text>
          <Text style={styles.buttonText_doar1}>Aqui</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button_doar1}
        >
          <Text style={styles.buttonText_doar}>Cadastre sua doação</Text>
          <Text style={styles.buttonText_doar1}>Aqui</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleHome}>
      <Text style={styles.titleName}>Estatísticas do RS</Text>
      <View style={styles.blueLine} />
      </View>

      <View style={styles.estatisticas}>
      <View style={styles.estatistica1}>
        <Text style={styles.info1}>4,65m</Text>
        <Text style={styles.titleInfo}>Nível da água</Text>
      </View>
      <View style={styles.estatistica2}>
        <Text style={styles.info2}>43 mil</Text>
        <Text style={styles.titleInfo}>Desabrigados</Text>
      </View>
      <View style={styles.estatistica3}>
        <Text style={styles.infoCidade1}>Roca Sales</Text>
        <Text style={styles.infoCidade2}>Cruzeiro do Sul</Text>
        <Text style={styles.infoCidade3}>Arroio do Meio</Text>
        <Text style={styles.titleInfo}>Cidades + afetadas</Text>
      </View>
      <Text style={styles.attEstatisticas}>*Atualizado diariamente</Text>
      </View>
      

    </ScrollView>
  )
}


