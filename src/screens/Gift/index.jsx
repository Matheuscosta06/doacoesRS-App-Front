import { View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import styles from './styles'
import { Feather } from '@expo/vector-icons';


export default function Gift() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>O que você deseja doar?</Text>

      <View style={styles.Inputcontainer3}>
        <Picker>
          <Picker.Item label="Produtos de Higiene" value="1" />
          <Picker.Item label="Roupas" value="2" />
          <Picker.Item label="Alimentos" value="3" />
          <Picker.Item label="Produtos para pet's" value="4" />
        </Picker>
      </View>

      <View style={styles.Inputcontainer1}>
        <Feather name="shopping-bag" size={24} color="#fff" />
        <TextInput placeholderTextColor={"#fff"} placeholder='Nome do Produto' style={styles.input} />
      </View>


      <View style={styles.Inputcontainer2}>
        <Feather name="bar-chart" size={24} color="#fff" />
        <TextInput placeholderTextColor={"#fff"} placeholder='Quantidade da doação' style={styles.input} />
      </View>



      <View style={styles.Inputcontainer4}>
        <Picker>
          <Picker.Item label="Senai Valinhos" value="1" />
          <Picker.Item label="Prefeitura de Valinhos" value="2" />
        </Picker>
      </View>

    </View>
  )
}