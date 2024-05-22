import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";
import Carrossel from '../../components/Carrossel';

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

      <View style={styles.estatisticas}>
      <Text style={styles.phrase0}>Seu gesto, nossa força:</Text>
      </View>

      <SafeAreaView>
            <Carrossel />
        </SafeAreaView>

        cons

      
      
    </ScrollView>
  )
}


