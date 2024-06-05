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
              onPress={() => navigation.navigate("Category")}
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
          <View style={styles.containerPorcetage}>
            <Text style={styles.txtPctg}>0%</Text>
            <Text style={styles.txtPctg}>50%</Text>
            <Text style={styles.txtPctg}>100%</Text>
          </View>
          <View style={styles.containerGrafico}>

            {
              goals.map((goal, index) => {
                const percentage = goal.current_quantity / goal.target_quantity;

                return (
                  <View key={index} style={styles.grafico}>
                    <View style={[styles.totalProgressBar, styles[goal.type]]}>
                      {
                        percentage >= 1 ? (
                          <>
                            <Text style={styles.completedText}>Meta atingida!</Text>
                            <View style={{ ...styles.completedProgressBar, ...styles[`progress_${goal.type}`], width: '100%' }} />
                          </>
                        ) : (
                          <View style={{ ...styles.completedProgressBar, ...styles[`progress_${goal.type}`], width: `${percentage * 100}%` }} />
                        )
                      }
                      <Text style={styles.progressBarText}>{goal.type}</Text>
                    </View>
                  </View>
                );
              })
            }
          </View>
        </View>

        {/* hygiene: #11D1C6
pets : #008B6B
roupas: #620A71
alimentpos: #C70808 */}

          <Text style={styles.titlex}>Doe Agora</Text>
          <View style={styles.blueLine} />

        <View style={styles.btn_doacoes}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Category")}
            style={styles.btn_comprar}
          >

            <Image source={require('../../../assets/iconCompra.png')} style={styles.img01}/>
            <View style={styles.textDiv}>
            <Text style={styles.btnText_comprar}>Compre sua doação</Text>
            <Text style={styles.btnText_comprar}>Aqui</Text>
            </View>
           
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Gift")}
            style={styles.btn_comprar2}
          >

            <Image source={require('../../../assets/iconDoar.png')} style={styles.img01}/>
            <View style={styles.textDiv}>
            <Text style={styles.btnText_comprar}>Cadastre sua doação</Text>
            <Text style={styles.btnText_comprar}>Aqui</Text>
            </View>
           
          </TouchableOpacity>
        </View>
        <View style={styles.estatisticas}>
        <View style={styles.blueLine1} />
          <Text style={styles.estatisticasTitle}>Estatísticas do RS</Text>
          <View style={styles.blueLine2} />

          <View style={styles.cards}>
            <View style={styles.card1}>
              <Text style={styles.IncidentesNumber}>3,3m</Text>
              <Text style={styles.IncidenteName}>Nível da água</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.IncidentesNumber}>30.414</Text>
              <Text style={styles.IncidenteName}>Desabrigados</Text>
            </View>
            <View style={styles.card3}>
              <Text style={styles.IncidentesCity}>
              Roca Sales 
              Cruzeiro do Sul 
              Arroio do Meio</Text>
              <Text style={styles.IncidenteName}>Cidades + afetadas</Text>
            </View>
            <Text style={styles.aviso}>*Atualizado diariamente</Text>
          </View>
        </View>

       

      </View>
    </ScrollView>
  )
}