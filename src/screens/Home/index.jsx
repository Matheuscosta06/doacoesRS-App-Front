import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
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

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Doe Agora</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}


