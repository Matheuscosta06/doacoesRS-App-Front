import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from "axios";
import PoPError from '../../components/PoPError'
import { useNavigation } from '@react-navigation/native';;

export default function Register() {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [msgError, setMsgError] = useState('');
    const [emailVerification, setEmailVerification] = useState('');

    const errorArray = [];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsgError("");
        }, 9000);

        return () => clearTimeout(timeout);
    }, [msgError]);

    const validate = () => {
        if (!name) {
            errorArray.push('*Preencha o campo nome')
        }
        if (!email) {
            errorArray.push('*Preencha o campo email')
        } else if (!email.includes('@')) {
            errorArray.push('*Email inválido')
        }
        if (!password) {
            errorArray.push('*Preencha o campo senha')
        } else if (password.length < 7) {
            errorArray.push('*A senha deve ter no mínimo 7 caracteres')
        } else if (!confirmedPassword) {
            errorArray.push('*Preencha o campo confirmar senha')
        } else if (confirmedPassword !== password) {
            errorArray.push('*As senhas não conferem')
        }
        if (errorArray.length > 0) {
            setMsgError(errorArray.join('\n'))
            return false;
        }

        return true;
    }

    const handleRegister = async () => {
        try {
            if (!validate()) {
                return;
            }

            const response = await axios.post(`${apiURL}/users`, {
                name,
                email,
                password
            });
            console.log(response.data);
            navigation.navigate('Login');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmedPassword('');

        } catch (error) {
            if (error.response) {
                setMsgError(error.response.data.message);
            } else {
                setMsgError(error.message);
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.mainContainer}>
            {
                msgError && <PoPError msg={msgError} setMsgError={setMsgError} />
            }
            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar</Text>

                <Text style={styles.subTitle}>Usuário:</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu nome de usuário" value={name} onChangeText={setName} />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu email" value={email} onChangeText={setEmail} />
                </View>

                <Text style={styles.subTitle}>Senhas:</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva sua senha" value={password} onChangeText={setPassword} secureTextEntry />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="unlock" size={24} color="#fff" />
                    <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Confirme sua senha" value={confirmedPassword} onChangeText={setConfirmedPassword} secureTextEntry />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Fazer Cadastro</Text>
                </TouchableOpacity>
                <View style={styles.containerInfo}>
                    <Text style={styles.txtNeedAcc}>Já tem uma conta? </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.yellow}>Entre!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
