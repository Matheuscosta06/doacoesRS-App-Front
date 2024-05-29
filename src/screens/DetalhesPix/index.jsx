import  { useState } from 'react';
import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function DetalhesPix() {
  
    const navigation = useNavigation();
    
    return (
        <ScrollView>
        <LinearGradient
            colors={['', '']}
                style={styles.container}
            >
        
        </LinearGradient>

        </ScrollView>
    );
}
