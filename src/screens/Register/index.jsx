import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import axios from "axios";

export default function Register() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [msgError, setMsgError] = useState('')

    const handleRegister = async () => {
        // try {
        //     const users = await axios.get(`${apiURL}/users`);
        //     const user = users.data.find(user => user.email == email);
            
        //     if (!name || !email || !password) {
        //         return setMsgError('Preencha todos os campos')
        //     }
        //     if (user) {
        //         return setMsgError('Email ja cadastrado')
        //     }
        //     else {
        //         await axios.post(`${apiURL}/users`, {
        //             name: name,
        //             email: email,
        //             password: password
        //         });
        //     }
        // } catch (error) {
        //     setMsgError('Erro ao cadastrar')
        //     return console.log(error)
        // }
        await axios.post(`${apiURL}/users`, {
            name: name,
            email: email,
            password: password
        });
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsgError("");
        }, 3000);

        return () => clearTimeout(timeout);
    }, [setMsgError]);


    return (
        <View style={styles.Maincontainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar</Text>
                {
                    msgError && <Text style={{ color: 'red' }}>{msgError}</Text>
                }
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