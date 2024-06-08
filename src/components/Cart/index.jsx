import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { CartContext } from '../../contexts/CartContext';
import { useEffect, useState, useContext } from 'react';

const Cart = () => {
  const [productsLength, setProductsLength] = useState(0);
  const {
    productsCart,
  } = useContext(CartContext);

  useEffect(() => {
    console.log(productsCart.length);
    setProductsLength(productsCart.length);
  }, [productsCart]);
  return (
    <View style={styles.container} >
      {
        productsLength > 0 && (
          <Text style={styles.cartText}>{productsLength}</Text>
        )
      }
      <Feather name="shopping-cart" size={48} color="#fff" style={styles.cartContainer} />
    </View>
  )
}

export default Cart;