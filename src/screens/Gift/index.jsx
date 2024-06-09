import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import GiftCart from '../../components/GiftCart';

export default function Category() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GiftCart />
      <ScrollView>
        <ImageBackground source={require('../../../assets/wlppRS2.png')} style={styles.imgBg}>
          <View style={styles.divMain}>
            <Text style={styles.titulo}>traga sua doação!!</Text>

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
      </ScrollView>
    </View>

  );
}









// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
// import styles from './styles';
// import { Feather } from '@expo/vector-icons';
// import axios from 'axios';
// import GiftCart from '../../components/GiftCart';
// import GiftList from '../../components/GiftList';

// const apiURL = process.env.EXPO_PUBLIC_API_URL;

// export default function Gift() {
//   const [productsHygiene, setProductsHygiene] = useState([]);
//   const [productsClothes, setProductsClothes] = useState([]);
//   const [productsFood, setProductsFood] = useState([]);
//   const [productsPets, setProductsPets] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [otherDonation, setOtherDonation] = useState('');




//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responseHygiene = await axios.get(`${apiURL}/products/type/hygiene`);
//         const responseClothes = await axios.get(`${apiURL}/products/type/clothes`);
//         const responseFood = await axios.get(`${apiURL}/products/type/food`);
//         const responsePets = await axios.get(`${apiURL}/products/type/pet`);

//         setProductsHygiene(responseHygiene.data.data);
//         setProductsClothes(responseClothes.data.data);
//         setProductsFood(responseFood.data.data);
//         setProductsPets(responsePets.data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCardPress = (category) => {
//     setSelectedCategory(category);
//     console.log(category);
//   };


//   return (
//     <View style={{ flex: 1 }}>
//       <GiftCart />
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.txt2}>Selecione a categoria da sua doação</Text>


//           {selectedCategory ? (
//             <View >
//               {selectedCategory === 'pet' && (
//                 <GiftList setSelectedCategory={setSelectedCategory} styles={styles} products={productsPets} />
//               )}
//               {selectedCategory === 'food' && (
//                 <GiftList setSelectedCategory={setSelectedCategory} styles={styles} products={productsFood} />
//               )}
//               {selectedCategory === 'clothes' && (
//                 <GiftList setSelectedCategory={setSelectedCategory} styles={styles} products={productsClothes} />
//               )}
//               {selectedCategory === 'hygiene' && (
//                 <GiftList setSelectedCategory={setSelectedCategory} styles={styles} products={productsHygiene} />
//               )}
//               {selectedCategory === 'Outros' && (
//                 <View style={styles.containerbtnOutros}>
//                   <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>VOLTAR</TouchableOpacity>
//                   <View style={styles.inputcontainer}>
//                     <Text style={styles.TextInput}>Descreva aqui sua doação</Text>
//                     <TextInput
//                       style={styles.input}
//                       value={otherDonation}
//                       onChangeText={setOtherDonation}
//                       placeholder='Ex: 1kg de arroz, 1 shampoo, 1 cobertor...'
//                     />
//                   </View>
//                   <TouchableOpacity style={styles.btn} onPress={() => setSelectedCategory(null)}>ENVIAR</TouchableOpacity>
//                 </View>
//               )}
//             </View>


//           ) : (

//             <View>
//               <View style={styles.icones1}>
//                 <TouchableOpacity style={styles.card} onPress={() => handleCardPress('pet')}>
//                   <View style={styles.cardInside}>
//                     <Image source={require('../../../assets/iconPets.png')} style={styles.picimg} />
//                     <Text style={styles.cardText}>Pets</Text>
//                   </View>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.card2} onPress={() => handleCardPress('food')}>
//                   <View style={styles.cardInside}>
//                     <Image source={require('../../../assets/iconFood.png')} style={styles.picimg} />
//                     <Text style={styles.cardTextFood}>Alimentos/Água</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.icones2}>
//                 <TouchableOpacity style={styles.card} onPress={() => handleCardPress('clothes')}>
//                   <View style={styles.cardInside}>
//                     <Image source={require('../../../assets/iconCabide.png')} style={styles.picimg} />
//                     <Text style={styles.cardText}>Roupas</Text>
//                   </View>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.card2} onPress={() => handleCardPress('hygiene')}>
//                   <View style={styles.cardInside}>
//                     <Image source={require('../../../assets/iconHigiene.png')} style={styles.picimg} />
//                     <Text style={styles.cardText}>Higiene</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.icones3}>
//                 <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Outros')}>
//                   <View style={styles.cardInside}>
//                     <Image source={require('../../../assets/outrosIcon.png')} style={styles.picimg} />
//                     <Text style={styles.cardText}>Outros</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
