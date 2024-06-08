import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import GiftCart from '../../components/GiftCart';

const apiURL = process.env.EXPO_PUBLIC_API_URL;

export default function Gift() {
  const [productsHygiene, setProductsHygiene] = useState([]);
  const [productsClothes, setProductsClothes] = useState([]);
  const [productsFood, setProductsFood] = useState([]);
  const [productsPets, setProductsPets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [otherDonation, setOtherDonation] = useState('');

  const navigation = useNavigation();


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
    <View style={{ flex: 1 }}>
      <GiftCart />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.txt1}>Traga sua doação!</Text>
          <Text style={styles.txt1}>O que você irá nos trazer?</Text>


          {selectedCategory ? (
            <View >
              {selectedCategory === 'pet' && (
                <View style={styles.containerbtn}>
                  <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>
                    <Feather name="x" size={24} color="black" />
                  </TouchableOpacity>
                  <View style={styles.cardcontainer}>

                    {productsPets.map((product) => (
                      <TouchableOpacity onPress={() => navigation.navigate("giftDetails", { product })} style={styles.card} key={product.id}>
                        <Image source={`${product.image}`} style={styles.image} />
                        <Text style={styles.cardText}>{product.name}</Text>
                      </TouchableOpacity>
                    ))}

                  </View>
                </View>
              )}
              {selectedCategory === 'food' && (
                <View style={styles.containerbtn}>
                  <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>
                    <Feather name="x" size={24} color="black" />
                  </TouchableOpacity>
                  <View style={styles.cardcontainer}>

                    {productsFood.map((product) => (
                      <TouchableOpacity onPress={() => navigation.navigate("giftDetails", { product })} style={styles.card} key={product.id}>
                        <Image source={`${product.image}`} style={styles.image} />
                        <Text style={styles.cardText}>{product.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
              {selectedCategory === 'clothes' && (
                <View style={styles.containerbtn}>
                  <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>
                    <Feather name="x" size={24} color="black" />
                  </TouchableOpacity>
                  <View style={styles.cardcontainer}>

                    {productsClothes.map((product) => (
                      <TouchableOpacity onPress={() => navigation.navigate("giftDetails", { product })} style={styles.card} key={product.id}>
                        <Image source={`${product.image}`} style={styles.image} />
                        <Text style={styles.cardText}>{product.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

              )}
              {selectedCategory === 'hygiene' && (
                <View style={styles.containerbtn}>
                  <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>
                    <Feather name="x" size={24} color="black" />
                  </TouchableOpacity>
                  <View style={styles.cardcontainer}>

                    {productsHygiene.map((product) => (
                      <TouchableOpacity onPress={() => navigation.navigate("giftDetails", { product })} style={styles.card} key={product.id}>
                        <Image source={`${product.image}`} style={styles.image} />
                        <Text style={styles.cardText}>{product.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
              {selectedCategory === 'Outros' && (
                <View style={styles.containerbtnOutros}>
                  <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>VOLTAR</TouchableOpacity>
                  <View style={styles.inputcontainer}>
                    <Text style={styles.TextInput}>Descreva aqui sua doação</Text>
                    <TextInput
                      style={styles.input}
                      value={otherDonation}
                      onChangeText={setOtherDonation}
                      placeholder='Ex: 1kg de arroz, 1 shampoo, 1 cobertor...'
                    />
                  </View>
                  <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>ENVIAR</TouchableOpacity>
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
              <View style={styles.icones3}>
                <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Outros')}>
                  <View style={styles.cardInside}>
                    <Image source={require('../../../assets/outrosIcon.png')} style={styles.picimg} />
                    <Text style={styles.cardText}>Outros</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
