import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Gift() {

  const [local, setLocal] = useState('')
  const local1 = 'Senai Valinhos'
  const local2 = 'Prefeitura de Valinhos'


  const [produto, setProduto] = useState('')
  const produto1 = 'higiene'
  const produto2 = 'Roupas'
  const produto3 = 'Alimentos'
  const produto4 = 'pets'


  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>O que você deseja doar?</Text>

      <RNPickerSelect
        placeholder={{ label: 'Categoria da doação', value: null }}
        value={produto}
        onValueChange={(value) => setProduto(value)}
        items={[
          { label: "higiene", value: produto1 },
          { label: "Roupas", value: produto2 },
          { label: "Alimentos", value: produto3 },
          { label: "pets", value: produto4 }

        ]}

        width={200}

      />

      <View style={styles.Inputcontainer1}>
        <Feather name="shopping-bag" size={24} color="#fff" />
        <TextInput placeholderTextColor={"#fff"} placeholder='Nome do Produto' style={styles.input} />
      </View>


      <View style={styles.Inputcontainer2}>
        <Feather name="bar-chart" size={24} color="#fff" />
        <TextInput placeholderTextColor={"#fff"} placeholder='Quantidade da doação' style={styles.input} />
      </View>

      <RNPickerSelect
        value={local}
        placeholder={{ label: 'Locais para o recolhimento', value: null }}
        onValueChange={(value) => setLocal(value)}
        items={[
          { label: "Senai Valinhos", value: local1 },
          { label: "Prefeitura de Valinhos", value: local2 },

        ]}
        width={200}

      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")} >
        <Text style={styles.txtbtn}>Doar</Text>
      </TouchableOpacity>


    </View>
  )
}