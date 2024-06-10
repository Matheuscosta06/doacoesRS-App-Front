import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useContext, useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { DonationContext } from '../../contexts/DonationContext';
import { AuthContext } from "../../contexts/AuthContext";
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

export default function DonationHistory() {
  const { getDonationsByUserId } = useContext(DonationContext);
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const [popUp, setPopUp] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const userId = user.id;
      getDonationsByUserId(userId).then((response) => {
        setDonations(response.data);
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 100 }}>
        <Text style={styles.title}>Historico de doações</Text>
        <View style={styles.containerDonations}>
          {donations.map((donation, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.txtStatus}>{donation.donation_status}</Text>
              <View style={{ alignItems: 'center', marginBottom: 5 }}>
                <Text style={styles.txt}>Doação</Text>
                <Text style={styles.txt}>#{donation.donation_id}</Text>
              </View>
              <TouchableOpacity onPress={() => setPopUp(donation)} style={styles.btn}>
                <Text style={styles.txtBtn}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      {
        popUp && (
          <View style={styles.popUpContainer}>
            <TouchableOpacity style={styles.x} onPress={() => setPopUp(null)}>
              <Feather name="x" size={38} color="#FFA41B" />
            </TouchableOpacity>
            <View style={styles.header}>
              <Text style={styles.headerText}>Doação #{popUp.donation_id}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Produto:</Text>
              <Image source={{ uri: popUp.product_image }} style={styles.popUpImage} />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.popUpTextTitle}>{popUp.product_name}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Detalhes:</Text>
              <Text style={styles.popUpText}>Valor: {popUp.value}</Text>
              <Text style={styles.popUpText}>Quantidade: {popUp.quantity}</Text>
              <Text style={styles.popUpText}>Data da Doação: {popUp.donation_date}</Text>
            </View>
          </View>
        )
      }
    </View >
  )
}