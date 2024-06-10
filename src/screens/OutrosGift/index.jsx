import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function OutrosGift() {
    const [donation, setDonation] = useState('');

    const handleDonationChange = (text) => {
        setDonation(text);
    };

    const handleDonationSubmit = () => {
        // Lógica para enviar a doação
        console.log(`Doação enviada: ${donation}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Outros Gift</Text>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Digite o que você irá doar:</Text>
                    <TextInput
                        style={styles.input}
                        value={donation}
                        onChangeText={handleDonationChange}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleDonationSubmit}>
                    <Text style={styles.buttonText}>Doar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
