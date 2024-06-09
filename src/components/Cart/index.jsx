import { CartContext } from '../../contexts/CartContext';
import { useEffect, useState, useContext } from 'react';
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const Cart = () => {
  const [productsLength, setProductsLength] = useState(0);
  const navigation = useNavigation();
  const {
    productsCart,
  } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(productsCart.length);
  }, [productsCart]);
  return (
    <View style={styles.container} >
      {
        productsLength > 0 && (
          <Text style={styles.cartText}>{productsLength}</Text>
        )
      }
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} >
        <Feather name="shopping-cart" size={48} color="#fff" style={styles.cartContainer} />
      </TouchableOpacity>
    </View>
  )
}

export default Cart;