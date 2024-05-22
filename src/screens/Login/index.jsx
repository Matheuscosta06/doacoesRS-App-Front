import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Title from '../../components/Title';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.containerApp}>
      <View style={styles.container}>
        <Text style={styles.title}>Entrar</Text>
        <View style={styles.containerLogin}>
          <View>
            <Text style={styles.txt}>Usuario:</Text>
            <View style={styles.inputContainer}>
              <AntDesign name="user" size={24} color="#fff" />
              <TextInput placeholderTextColor={"#fff"} placeholder='Escreva seu nome de usuario' style={styles.input} />
            </View>
          </View>
          <View>
            <Text style={styles.txt}>Senha:</Text>
            <View style={styles.inputContainer}>
              <AntDesign name="lock" size={24} color="#fff" />
              <TextInput placeholderTextColor={"#fff"} placeholder='Escreva sua senha' style={styles.input} />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txt}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.txtNeedAcc}>Não tem uma conta? <Text style={styles.yellow}>Crie!</Text></Text>
        </View>
      </View>
    </View>
  )
}