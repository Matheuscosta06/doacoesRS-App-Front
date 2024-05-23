import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import axios from "axios";

export default function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [msgError, setMsgError] = useState('');

    const errorArry = [];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsgError("");
        }, 7000);

        return () => clearTimeout(timeout);
    }, [msgError]);

    const validate = () => {
        if (!name) {
            errorArry.push('*Preencha o campo nome')
        }

        if (!email) {
            errorArry.push('*Preencha o campo email')
        }

        if (!password) {
            errorArry.push('*Preencha o campo senha')
        }
        if (email) {
            axios.get(`${apiURL}/users?email=${email}`).then((response) => {
                if (response.data.length > 0) {
                    errorArry.push('*Ja existe um usuario com este email')
                }
            })
        }
        if (password.length < 7) {
            errorArry.push('*A senha deve ter no minimo 7 caracteres')
        }
        if (errorArry.length > 0) {
            setMsgError(errorArry.join('\n'))
            return false;
        }

        return true;
    }


    const handleRegister = async () => {
        try {
            if (!validate()) {
                return;
            } else {
                const response = await axios.post(`${apiURL}/users`, {
                    name,
                    email,
                    password
                });
                console.log(response.data);
                setMsgError('Usuario cadastrado com sucesso')
            }
        } catch (error) {
            if (error.response) {
                setMsgError(error.response.data.message)
            } else {
                setMsgError('Erro ao cadastrar usuario')
            }
        }
    }


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