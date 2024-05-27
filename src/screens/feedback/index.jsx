import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import React from 'react';

export default function Feedback() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.txt1}>Pricipais</Text>
        <hr style={styles.linha1}></hr>
        <Text style={styles.txt2}>Dúvidas</Text>
        <hr style={styles.linha2}></hr>


        <View style={styles.card1}>
          <Text style={styles.txt2}>Por qual motivo vocês quiseram criar esse site?</Text>
          <Text style={styles.txt3}>Pois tinhamos a vontade de ajudar o Rio grande do Sul com o que sabemos fazer, que são aplicativos</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.txt2}>Quais são os planos para o futuro?</Text>
          <Text style={styles.txt3}>Temos a intenção de expandir para outros estados e até mesmo para outros países</Text>
        </View>
        <View style={styles.card3}>
          <Text style={styles.txt2}>Como posso ajudar?</Text>
          <Text style={styles.txt3}>Você pode ajudar compartilhando o site com seus amigos e familiares</Text>
        </View>

        <View style={styles.feed}>
          <Text style={styles.txt2}>Deixe sua dúvida ou Feedback</Text>
          <TextInput placeholderTextColor={"#fff"} placeholder='Digite Aqui' style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtbtn}>Enviar</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
