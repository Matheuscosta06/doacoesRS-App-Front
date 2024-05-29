import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import styles from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export default function Category() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView>
          <Text style={styles.titulo}>O que doar?</Text>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesPets`)}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/pets.jpg')} style={styles.piximg} />
              <Text style={styles.cardText}>PET's</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesAlimentos`)}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/alimento.jpg')} style={styles.piximg} />

              <Text style={styles.cardText}>Alimentos/Água</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesRoupas`)}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/roupas.jpg')} style={styles.piximg} />
              <Text style={styles.cardText}>Roupas</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesHigiene`)}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/higiene.jpg')} style={styles.piximg} />
              <Text style={styles.cardText}>Higiene</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesPix`)}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/pix.jpeg')} style={styles.piximg} />
              <Text style={styles.cardText}>Dinheiro</Text>
            </View>

          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
