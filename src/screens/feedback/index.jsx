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
          <View style={styles.ask}>
            <Text style={styles.txt4}>Por qual motivo vocês quiseram criar esse site?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.txt3}>Pois tinhamos a vontade de ajudar o Rio grande do Sul com o que sabemos fazer, que são aplicativos</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={styles.ask}>
            <Text style={styles.txt4}>Quais são os planos para o futuro?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.txt3}>Temos a intenção de expandir para outros estados e até mesmo para outros países</Text>
          </View>
        </View>

        <View style={styles.card3}>
          <View style={styles.ask}>
            <Text style={styles.txt4}>Como posso ajudar?</Text>
          </View>
          <View style={styles.answer}>
            <Text style={styles.txt3}>Você pode ajudar compartilhando o site com seus amigos e familiares</Text>
          </View>
        </View>


        <Text style={styles.texto}>Deixe sua dúvida ou Feedback</Text>
        <TextInput placeholderTextColor={"#000"} placeholder='Digite Aqui' style={styles.input} />

        <View style={styles.divpaibtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtbtn}>Enviar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
