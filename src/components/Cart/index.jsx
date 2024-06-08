import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.container} >
      <Feather name="shopping-cart" size={48} color="#fff" style={styles.cartContainer} />
    </TouchableOpacity>
  )
}

export default Cart;