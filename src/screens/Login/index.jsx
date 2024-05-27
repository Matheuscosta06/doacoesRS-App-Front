import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      if (name && password) {
        await signIn(name, password);
      } else {
        alert('Preencha todos os campos');
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  }

  return (
    <View style={styles.containerApp}>
      <View style={styles.container}>
        <Text style={styles.title}>Entrar</Text>
        <View style={styles.containerLogin}>
          <View>
            <Text style={styles.txt}>Usuario:</Text>
            <View style={styles.inputContainer}>
              <AntDesign name="user" size={24} color="#fff" />
              <TextInput onChangeText={setName} placeholderTextColor={"#fff"} placeholder='Escreva seu nome de usuario' style={styles.input} />
            </View>
          </View>
          <View>
            <Text style={styles.txt}>Senha:</Text>
            <View style={styles.inputContainer}>
              <AntDesign name="lock" size={24} color="#fff" />
              <TextInput onChangeText={setPassword} placeholderTextColor={"#fff"} placeholder='Escreva sua senha' style={styles.input} />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.txt}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.containerInfo}>
            <Text style={styles.txtNeedAcc}>Não tem uma conta? </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(`Register`)}>
              <Text style={styles.yellow}>Crie!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}