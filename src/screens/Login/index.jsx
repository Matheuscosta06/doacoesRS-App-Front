import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import PoPError from '../../components/PoPError';

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const [msgError, setMsgError] = useState('');

  const errorArry = [];

  const handleLogin = async () => {
    try {
      if (!validate()) {
        return;
      }
      await signIn(name, password);
      setName('');
      setPassword('');
    } catch (error) {
      if (error.response) {
        setMsgError(error.response.data.message);
      } else {
        setMsgError(error.message);
      }
    }
  }

  const validate = () => {
    if (!name) {
      errorArry.push('*Preencha o campo nome')
    }
    if (!password) {
      errorArry.push('*Preencha o campo senha')
    } else if (password.length < 7) {
      errorArry.push('*A senha deve ter no minimo 7 caracteres')
    }

    if (errorArry.length > 0) {
      setMsgError(errorArry.join('\n'))
      return false;
    }

    return true;
  }


  return (
    <View style={styles.containerApp}>
      {
        msgError && <PoPError msg={msgError} setMsgError={setMsgError} />
      }
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
              <TextInput onChangeText={setPassword} secureTextEntry={true} placeholderTextColor={"#fff"} placeholder='Escreva sua senha' style={styles.input} />
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