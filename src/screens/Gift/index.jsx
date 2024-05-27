import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons';


export default function Gift() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>O que você deseja doar?</Text>

      <View style={styles.Inputcontainer1}>
        <Feather name="shopping-bag" size={24} color="#fff" />
        <TextInput placeholderTextColor={"#fff"} placeholder='Nome do Produto' style={styles.input} />
      </View>


      <View style={styles.Inputcontainer2}>
        <Feather name="bar-chart" size={24} color="#fff" />
        <TextInput placeholderTextColor={"#fff"} placeholder='Quantidade da doação' style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtbtn}>Doar</Text>
      </TouchableOpacity>


    </View>
  )
}