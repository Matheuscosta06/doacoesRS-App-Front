import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import { AuthContext } from '../../contexts/AuthContext';
import axios from "axios";

export default function Register() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { teste } = useContext(AuthContext);


    const handleRegister = async () => {
        try {
            await teste();
        } catch (error) {
            console.log(error)
        }
    }







return (
    <View style={styles.container}>
        <Text>Cadastrar</Text>
        <Text>Usuario:</Text>
        <TextInput style={styles.input} placeholder="Escreva seu  nome de usuario" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Escreva seu email" value={email} onChangeText={setEmail} />

        <Text>Senhas:</Text>
        <TextInput style={styles.input} placeholder="Crie uma senha " value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>

    </View>
)
    }