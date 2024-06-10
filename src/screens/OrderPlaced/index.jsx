import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import { DonationContext } from '../../contexts/DonationContext';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext';
import successImage from '../../../assets/success.png';


export default function OrderPlaced({ route }) {
  const navigation = useNavigation();
  const { donationId } = route.params;
  const { getAllDonationsItemsByDonationId, getFullPriceByDonationId } = useContext(DonationContext);
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(null);
  const { productsCart, cancelProduct } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const items = await getAllDonationsItemsByDonationId(donationId);
      const total = await getFullPriceByDonationId(donationId);
      setProducts(items);
      setTotalValue(total);
    };
    fetchProducts();
    productsCart.length = 0;
    cancelProduct();


  }, [donationId]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Feather style={styles.containerIcon} name="check" size={100} color="#fff" />
        <View style={styles.containerOrderPlaced}>
          <Text style={styles.txtDoacao}>Doação realizada com sucesso!</Text>
          <Image source={successImage} style={styles.image} />

          <View style={styles.containerCod}>
            <Text style={styles.txtCod}>Código de doação:</Text>
            <Text style={styles.txtCod}>{donationId}</Text>
          </View>
          <Text style={styles.txtThank}>Obrigado por sua doação!</Text>
        </View>
        <View style={styles.container2}>
          {products.map((product) => (
            <View key={product.donation_item_id}>
              <View style={styles.cardProduct}>
                <Image source={{ uri: product.product_image }} style={styles.imageProduct} />
                <View style={styles.productDetails}>
                  <Text style={styles.txtNameProduct}>{product.product_name}</Text>
                  <View style={styles.containerValue}>
                    <Text style={styles.txtValue}>Valor:</Text>
                    <Text style={styles.txtPrice}>R${product.product_value}</Text>
                  </View>
                  <Text style={styles.txtQuantity}>Quantidade: {product.quantity}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.containerPurchase}>
          <View style={styles.containerTotal}>
            <Text style={styles.titleTotal}>Total:</Text>
            <Text style={styles.txtPriceAll}>R${totalValue}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
            <Text style={styles.txtBtn}>Voltar para o início</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
