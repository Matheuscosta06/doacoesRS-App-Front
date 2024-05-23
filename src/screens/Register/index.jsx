import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import axios from "axios";

export default function Register() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleRegister = async () => {
        const userAlreadyExists = await axios.get(`${apiURL}/users/email/${email}`);

        if (!name || !email || !password) {
            return setMsgError('Preencha todos os campos')
        }
        if (userAlreadyExists) {
            return setMsgError('Email ja cadastrado')
        }
        try {
            const response = await axios.post(`${apiURL}/users`, {
                name,
                email,
                password
            });
            if (response.status === 201) {
                setMsgError('Usuario cadastrado com sucesso')
                setTimeout(() => {
                    navigation.navigate('Login')
                }, 2000)
            }
        } catch (error) {
            setMsgError('Erro ao cadastrar usuario')
        }
    }


    return (
        <View style={styles.Maincontainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar</Text>
                <Text style={styles.subTitle}>Usuario:</Text>
                <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu  nome de usuario" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu email" value={email} onChangeText={setEmail} />

                <Text style={styles.subTitle}>Senhas:</Text>
                <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Crie uma senha " value={password} onChangeText={setPassword} />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}