import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Title from '../../components/Title';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
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