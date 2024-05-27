import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import styles from './styles';
import React from 'react';

export default function Feedback() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.txt1}>Pricipais</Text>
        <Text style={styles.txt2}>Dúvidas</Text>
      </ScrollView>
    </View>
  );
}
