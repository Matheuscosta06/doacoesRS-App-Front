import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import axios from 'axios';


export default function Home() {
  const [goals, setGoals] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getMetaProducts();
  }, []);

  const getMetaProducts = async () => {
    try {
      const response = await axios.get(`${apiURL}/products/goals`);
      setGoals(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

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

        <View style={styles.donatesGraphic} >
          <Text style={styles.titlex}>Metas de doações</Text>
          <View style={styles.blueLine} />
          {
            goals.map((goal, index) => {
              const percentage = goal.current_quantity / goal.target_quantity;

              return (
                <View key={index} style={styles.grafico}>
                  <Text>{goal.type}</Text>
                  <Text>Progresso atual: {goal.current_quantity}</Text>
                  <Text>Meta: {goal.target_quantity}</Text>
                  <View style={[styles.totalProgressBar, styles[goal.type]]}>
                    <View style={{ ...styles.completedProgressBar, width: `${percentage * 100}%` }} />
                    <Text style={styles.progressBarText}>{goal.type}</Text>
                  </View>
                  <Text>{(percentage * 100).toFixed(2)}% concluído</Text>
                </View>
              );
            })
          }
        </View>

        {/* hygiene: #11D1C6
pets : #008B6B
roupas: #620A71
alimentpos: #C70808 */}

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

        <TouchableOpacity
          onPress={() => navigation.navigate("News01")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Noticias</Text>
        </TouchableOpacity>



      </View>
    </ScrollView>
  )
}