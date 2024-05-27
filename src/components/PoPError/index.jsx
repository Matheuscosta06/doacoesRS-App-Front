import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import AntDesign from '@expo/vector-icons/AntDesign';


const PoPError = ({ msg }) => {
  return (
    <View style={styles.container} >
        <AntDesign name="closecircleo" size={24} color="#f27474" />
        <Text style={styles.errors}>Um problema inesperado ocorreu. tente novamente.</Text>
      <Text style={styles.errors}>{msg}</Text>
    </View>
  )
}

export default PoPError;