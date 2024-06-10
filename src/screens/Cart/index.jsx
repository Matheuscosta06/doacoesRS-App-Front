import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { DonationContext } from '../../contexts/DonationContext';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import PoPError from '../../components/PoPError';

export default function Cart() {
  const navigation = useNavigation();
  const { createDonation, createDonationItem, updateStatusDonation } = useContext(DonationContext);
  const { productsCart, removeProduct, addProduct, cancelProduct, getTotalCartValue } = useContext(CartContext);
  const [localProductsCart, setLocalProductsCart] = useState(productsCart);
  const [allValue, setAllValue] = useState(0);
  const [popUpError, setPopUpError] = useState(null);
  const [popUpPurchase, setPopUpPurchase] = useState(false);
  const [donationId, setDonationId] = useState(null);

  useFocusEffect(
    useCallback(() => {
      setLocalProductsCart(productsCart);
      setAllValue(getTotalCartValue());
    }, [productsCart])
  );

  const incrementQuantity = (product) => {
    addProduct(product.product, 1);
    setAllValue(getTotalCartValue());
  };

  const decrementQuantity = (product) => {
    removeProduct(product.product);
    setAllValue(getTotalCartValue());
  };

  const lastProduct = (product) => {
    cancelProduct(product.product);
    setAllValue(getTotalCartValue());
  };

  const sendProducts = async () => {
    if (localProductsCart.length === 0) {
      setPopUpError('Você não possui produtos no carrinho.');
      return;
    } else {
      const responseDonation = await createDonation();
      const donationId = responseDonation.donations.id;
      setDonationId(donationId);
      localProductsCart.map(async (product) => {
        await createDonationItem(donationId, product.product.id, product.qtd);
      });
      setPopUpPurchase(true);
    }
  };

  const handlePurchase = () => {
    setPopUpPurchase(false);
    if (donationId) {
      updateStatusDonation(donationId);
      navigation.navigate('OrderPlaced', { donationId });
    }
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
          <Text style={styles.txtAllPrice}>R${allValue}</Text>
          <TouchableOpacity onPress={() => sendProducts()} style={styles.btnFinalizar}>
            <Text style={styles.txtFinalizar}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {popUpPurchase && (
        <View style={styles.containerPopUp}>
          <TouchableOpacity style={styles.x} onPress={() => setPopUpPurchase(false)}>
            <Feather name="x" size={38} color="#FFA41B" />
          </TouchableOpacity>
          <Text style={styles.txtPurchasePix}>Realize o pagamento utilizando o seguinte PIX:</Text>
          <Image source={require('../../../assets/qr.png')} style={{ width: 200, height: 200 }} />
          <TouchableOpacity onPress={() => handlePurchase()} style={styles.btn}>
            <Text style={styles.txtBtn}>Pagamento Concluído</Text>
          </TouchableOpacity>
        </View>
      )}
      {popUpError && <PoPError msg={popUpError} setMsgError={setPopUpError} />}
    </View>
  );
}
