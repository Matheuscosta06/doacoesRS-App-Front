import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import styles from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import axios from 'axios';

export default function Category() {

  const navigation = useNavigation();

  const [productsHygiene, setProductsHygiene] = useState([])
  const [productsPet, setProductsPet] = useState([])
  const [productsFood, setProductsFood] = useState([])
  const [productsClothes, setProductsClothes] = useState([])






  useEffect(() => {
    try {
      const type = ['hygiene', 'pet']

      type.map(async (type) => {
        const response = await axios.get(`${apiURL}/products/type/${type}`)
      

        if (type == 'hygiene') {
          setProductsHygiene(response.data.data)
        }
        if (type == 'pet') {
          setProductsPet(response.data.data)
        }
        if (type == 'food') {
          setProductsFood(response.data.data)
        }
        if (type == 'clothes') {
          setProductsClothes(response.data.data)
        }
        return response.data.data
      })
    }
    catch (error) {
      console.error(error)
    }
  }, [])

  console.log(productsPet);

  // console.log("esse é o products");
  // console.log(products);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView>
          <Text style={styles.titulo}>O que doar?</Text>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesPets`, {productsPet})}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/pets.jpg')} style={styles.piximg} />
              <Text style={styles.cardText}>PET's</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesAlimentos`, {productsFood})}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/alimento.jpg')} style={styles.piximg} />

              <Text style={styles.cardText}>Alimentos/Água</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesRoupas`, {productsClothes})}>

            <View style={styles.cardzin}>
              <Image source={require('../../../assets/roupas.jpg')} style={styles.piximg} />
              <Text style={styles.cardText}>Roupas</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`DetalhesHigiene`, {productsHygiene})}>

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
