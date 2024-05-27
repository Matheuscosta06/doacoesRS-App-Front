import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import AntDesign from '@expo/vector-icons/AntDesign';


const PoPError = ({ msg, setMsgError }) => {
  return (
    <View style={styles.screen}>

    <View style={styles.container} >
        <AntDesign name="closecircleo" size={48} color="#f27474" />
        <Text style={styles.text}>Um problema inesperado ocorreu. tente novamente.</Text>
      <Text style={styles.errors}>{msg}</Text>

      <TouchableOpacity onPress={() => setMsgError('')} style={styles.button}>
        <Text style={styles.buttonText}>Ok</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default PoPError;