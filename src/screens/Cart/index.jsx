import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { CartContext } from '../../contexts/CartContext';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

export default function Cart() {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const { productsCart, removeProduct, addProduct, cancelProduct } = useContext(CartContext);
  const [localProductsCart, setLocalProductsCart] = useState(productsCart);
  const [productDetails, setProductDetails] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setLocalProductsCart(productsCart);
      console.log(localProductsCart);
    }, [productsCart])
  );

  const incrementQuantity = (product) => {
    addProduct(product.product, 1);
  };

  const decrementQuantity = (product) => {
    removeProduct(product.product);
  };

  const lastProduct = (product) => {
    cancelProduct(product.product);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tituloContainer}>
          <Text style={styles.primeiraLetra}>C</Text>
          <Text style={styles.titulo1}>ARRINHO</Text>
        </View>
        <View style={styles.linhaLaranja} />
        <View style={styles.subtitulocontainer}>
          <Text style={styles.subtitulo}>DOAÇÕES</Text>
        </View>

        <View style={styles.linhaLaranja2} />
        <View style={styles.containerProduct}>
          {localProductsCart.map((productData) => (
            <View style={styles.card} key={productData.product.id}>
              <TouchableOpacity style={styles.x} onPress={() => lastProduct(productData)}>
                <Feather name="x" size={38} color="#FFA41B" />
              </TouchableOpacity>

              <Image source={{ uri: productData.product.image }} style={styles.image} />
              <Text style={styles.titleName}>{productData.product.name}</Text>
              <Text style={styles.txtPrice}>R${productData.product.value}</Text>
              <View style={styles.containerQntd}>
                <TouchableOpacity onPress={() => incrementQuantity(productData)}>
                  <FontAwesome5 name="plus" size={20} color="#fff" />
                </TouchableOpacity>
                <TextInput style={styles.input} value={String(productData.qtd)} />
                <TouchableOpacity onPress={() => decrementQuantity(productData)}>
                  <Entypo name="minus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.allPrice}>
          <Text style={styles.txtAll}>Total:</Text>
          <Text style={styles.txtAllPrice}>R$100,00</Text>
          <TouchableOpacity style={styles.btnFinalizar}>
            <Text style={styles.txtFinalizar}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}