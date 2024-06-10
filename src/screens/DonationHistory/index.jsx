import { View, Text, TouchableOpacity } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { DonationContext } from '../../contexts/DonationContext';
import { AuthContext } from "../../contexts/AuthContext";
import styles from './styles';

export default function DonationHistory() {
  const { getDonationsByUserId } = useContext(DonationContext);
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const userId = user.id;
    getDonationsByUserId(userId).then((response) => {
      setDonations(response.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historico de doações</Text>
      <View style={styles.containerDonations}>
        {donations.map((donation, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.txtStatus}>{donation.donation_status}</Text>
            <View style={{ alignItems: 'center', marginBottom: 5 }}>
              <Text style={styles.txt}>Doação</Text>
              <Text style={styles.txt}>#{donation.donation_id}</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtBtn}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}