import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView,   TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const apiURL = process.env.EXPO_PUBLIC_API_URL;

export default function Gift() {
  const [productsHygiene, setProductsHygiene] = useState([]);
  const [productsClothes, setProductsClothes] = useState([]);
  const [productsFood, setProductsFood] = useState([]);
  const [productsPets, setProductsPets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHygiene = await axios.get(`${apiURL}/products/type/hygiene`);
        const responseClothes = await axios.get(`${apiURL}/products/type/clothes`);
        const responseFood = await axios.get(`${apiURL}/products/type/food`);
        const responsePets = await axios.get(`${apiURL}/products/type/pet`);

        setProductsHygiene(responseHygiene.data.data);
        setProductsClothes(responseClothes.data.data);
        setProductsFood(responseFood.data.data);
        setProductsPets(responsePets.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleCardPress = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.txt1}>Traga sua doação!</Text>
      <Text style={styles.txt1}>O que você irá nos trazer?</Text>


      {selectedCategory ? (
        <View >
          {selectedCategory === 'pet' && (
            <View>
              <Text style={styles.txt2}>Pets</Text>
              <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>fechar</TouchableOpacity>
            <View style={styles.cardcontainer}>
              {productsPets.map((product) => (
                console.log(product),
                <View style={styles.card}>
                  <Image source={`${product.image}`}style={styles.image} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
              ))}
            </View>
            </View>
          )}
          {selectedCategory === 'food' && (
            <View>
              <Text style={styles.txt2}>Alimentos/Água</Text>
              <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>fechar</TouchableOpacity>
              <View style={styles.cardcontainer}>

              {productsFood.map((product) => (
                <View style={styles.card}>
                  <Image source={`${product.image}`}style={styles.image} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
              ))}
            </View>
            </View>
          )}
          {selectedCategory === 'clothes' && (
            <View>
              <Text style={styles.txt2}>Roupas</Text>
              <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>fechar</TouchableOpacity>
              <View style={styles.cardcontainer}>

              {productsClothes.map((product) => (
                <View style={styles.card}>
                  <Image source={`${product.image}`} style={styles.image} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
              ))}
            </View>
            </View>

          )}
          {selectedCategory === 'hygiene' && (
            <View >
              <Text style={styles.txt2}>Higiene</Text>
              <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>fechar</TouchableOpacity>
              <View style={styles.cardcontainer}>

              {productsHygiene.map((product) => (
                <View style={styles.card}>
                  <Image source={`${product.image}`}style={styles.image} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
              ))}
            </View>
            </View>
          )}
        </View>
      ) : (
        <View>
          <View style={styles.icones1}>
            <TouchableOpacity style={styles.card} onPress={() => handleCardPress('pet')}>
              <View style={styles.cardInside}>
                <Image source={require('../../../assets/iconPets.png')} style={styles.picimg} />
                <Text style={styles.cardText}>Pets</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card2} onPress={() => handleCardPress('food')}>
              <View style={styles.cardInside}>
                <Image source={require('../../../assets/iconFood.png')} style={styles.picimg} />
                <Text style={styles.cardTextFood}>Alimentos/Água</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.icones2}>
            <TouchableOpacity style={styles.card} onPress={() => handleCardPress('clothes')}>
              <View style={styles.cardInside}>
                <Image source={require('../../../assets/iconCabide.png')} style={styles.picimg} />
                <Text style={styles.cardText}>Roupas</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card2} onPress={() => handleCardPress('hygiene')}>
              <View style={styles.cardInside}>
                <Image source={require('../../../assets/iconHigiene.png')} style={styles.picimg} />
                <Text style={styles.cardText}>Higiene</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Outros')}>
            <View style={styles.cardInside}>
              <Image source={require('../../../assets/outrosIcon.png')} style={styles.picimg} />
              <Text style={styles.cardText}>Outros</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </ScrollView>
  );
}
