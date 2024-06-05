import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from './styles';

const Cart = () => {
  return (
    <View style={styles.container} >

      <Feather name="shopping-cart" size={48} color="#fff" style={styles.cartContainer} />
    </View>
  )
}

export default Cart;