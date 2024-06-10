import { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import { DonationContext } from '../../contexts/DonationContext';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext';

export default function OrderPlaced({ route }) {
  const navigation = useNavigation();
  const { donationId } = route.params;
  const { getAllDonationsItemsByDonationId, getFullPriceByDonationId } = useContext(DonationContext);
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(null);
  const [popUpPurchase, setPopUpPurchase] = useState(false);
  const { cancelProduct, productsCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const items = await getAllDonationsItemsByDonationId(donationId);
      const total = await getFullPriceByDonationId(donationId);
      setProducts(items);
      setTotalValue(total);
      console.log(productsCart);

    };
    fetchProducts();
  }, [donationId]);

  const handlePurchase = () => {
    setPopUpPurchase(!popUpPurchase);
    if (popUpPurchase) {
      productsCart.length = 0;
      cancelProduct();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Feather style={styles.containerIcon} name="check" size={100} color="#fff" />
        <View style={styles.containerOrderPlaced}>
          <Text style={styles.txtDoacao}>Doação realizada com sucesso!</Text>
          <View style={styles.containerCod}>
            <Text style={styles.txtCod}>Código de doação:</Text>
            <Text style={styles.txtCod}>{donationId}</Text>
          </View>
          <Text style={styles.txtThank}>Obrigado por sua doação!</Text>
        </View>
        <View>
          {
            products.map((product) => (
              <View style={styles.cardProduct} key={product.donation_item_id}>
                <Image source={{ uri: product.product_image }} style={{ width: 84, height: 84 }} />
                <Text style={styles.txtNameProduct}>{product.product_name}</Text>
                <View style={styles.containerValue}>
                  <Text style={styles.txtValue}>Valor:</Text>
                  <Text style={styles.txtPrice}>R${product.product_value}</Text>
                </View>
              </View>
            ))
          }
        </View>
        <View style={styles.containerPurchase}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.titleTotal}>Total:</Text>
            <Text style={styles.txtPriceAll}>R${totalValue}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => handlePurchase()} style={styles.btn}>
              <Text style={styles.txtBtn}>Fazer pagamento</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
              <Text style={styles.txtBtn}>Voltar para inicio</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          popUpPurchase && (
            <View style={styles.containerPopUp}>
              <TouchableOpacity style={styles.x} onPress={() => handlePurchase()}>
                <Feather name="x" size={38} color="#FFA41B" />
              </TouchableOpacity>
              <Text style={styles.txtPurchasePix}>Realize o pagamento utilizando o seguinte PIX:</Text>
              <Image source={require('../../../assets/qr.png')} style={{ width: 200, height: 200 }} />
            </View>
          )
        }
      </View >
    </ScrollView >
  );
}