import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from "axios";
import PoPError from '../../components/PoPError';

export default function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [msgError, setMsgError] = useState('');
    const [emailVerification, setEmailVerification] = useState('');

    const errorArry = [];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsgError("");
        }, 9000);

        return () => clearTimeout(timeout);
    }, [msgError]);

    const validate = () => {
        if (!name) {
            errorArry.push('*Preencha o campo nome')
        }
        if (!email) {
            errorArry.push('*Preencha o campo email')
        } else if (!email.includes('@')) {
            errorArry.push('*Email invalido')
        }
        if (!password) {
            errorArry.push('*Preencha o campo senha')
        } else if (password.length < 7) {
            errorArry.push('*A senha deve ter no minimo 7 caracteres')
        } else if (!confirmedPassword) {
            errorArry.push('*Preencha o campo confirmar senha')
        } else if (confirmedPassword !== password) {
            errorArry.push('*As senhas não conferem')
        }
        if (errorArry.length > 0) {
            setMsgError(errorArry.join('\n'))
            return false;
        }

        return true;
    }

    const handleRegister = async () => {
        try {
            try {
                if (!validate()) {
                    return;
                }
                const responseEmail = await axios.get(`${apiURL}/users/email/${email}`);
                if (responseEmail.data) {
                    setMsgError('Email ja cadastrado')
                    return;
                }
            } catch (error) {
                const response = await axios.post(`${apiURL}/users`, {
                    name,
                    email,
                    password
                });
                console.log(response.data);
                navigation.navigate('Login');
            }
        } catch (error) {
            setMsgError('Erro ao cadastrar usuario')
        }
    }


    return (
        <View style={styles.mainContainer}>
            {
                msgError && <PoPError msg={msgError} setMsgError={setMsgError} />
            }
            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar</Text>

                <Text style={styles.subTitle}>Usuario:</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu nome de usuario" value={name} onChangeText={setName} />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu email" value={email} onChangeText={setEmail} />
                </View>

                <Text style={styles.subTitle}>Senhas:</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva sua senha" value={password} onChangeText={setPassword} />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="unlock" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Confirme sua senha" value={confirmedPassword} onChangeText={setConfirmedPassword} />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Fazer Cadastro</Text>
                </TouchableOpacity>
                <View style={styles.containerInfo}>
                    <Text style={styles.txtNeedAcc}>Já tem uma conta? </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(`Login`)}>
                        <Text style={styles.yellow}>Entre!</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}