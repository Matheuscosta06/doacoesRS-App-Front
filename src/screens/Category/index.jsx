import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export default function Category() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/wlppRS.png')} style={styles.imgBg}>
        <View style={styles.divMain}>
        <Text style={styles.titulo}>O que doar?</Text>

        <View style={styles.icones1}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesPets`)}>

        <View style={styles.cardInside}>
           <Image source={require('../../../assets/iconPets.png')} style={styles.picimg} />
           <Text style={styles.cardText}>Pets</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate(`DetalhesAlimentos`)}>

  <View style={styles.cardInside}>
   <Image source={require('../../../assets/iconFood.png')} style={styles.picimg} />
   <Text style={styles.cardTextFood}>Alimentos/Água</Text>
</View>

</TouchableOpacity>
          
        </View>

        <View style={styles.icones2}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesRoupas`)}>

        <View style={styles.cardInside}>
           <Image source={require('../../../assets/iconCabide.png')} style={styles.picimg} />
           <Text style={styles.cardText}>Roupas</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate(`DetalhesHigiene`)}>

  <View style={styles.cardInside}>
   <Image source={require('../../../assets/iconHigiene.png')} style={styles.picimg} />
   <Text style={styles.cardText}>Higiene</Text>
</View>

</TouchableOpacity>
          
        </View>

        <Text style={styles.txt0}>ou</Text>

        <View style={styles.icones3}>
        <TouchableOpacity style={styles.cardPix} onPress={() => navigation.navigate(`DetalhesPix`)}>

<View style={styles.cardInsidePix}>
   <Image source={require('../../../assets/iconPix.png')} style={styles.picimgPix} />
   <Text style={styles.cardTextPix}>Ajude pelo Pix</Text>
</View>

</TouchableOpacity>
        </View>

        </View>
      </ImageBackground>
    </View>
    
  );
}
