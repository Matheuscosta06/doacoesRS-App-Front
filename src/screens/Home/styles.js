import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9"
  },
  head: {
    backgroundColor: '#283444',
    display: 'flex',
    height: 430,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50
  },
  imgHeader: {
    width:350,
    height: 330,
    marginTop: -55,
    marginLeft: 210
  },
  titleHeader:{
    marginLeft: 20,
    marginTop: -50
  },
  title0: {
    color: '#fff',
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title01:{
    color: '#FFA41B',
    fontSize: 40
  },
  btnHeader: {
    alignItems: 'center',
    marginTop: 55
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFA41B",
    borderRadius: 10,
    height: 30,
    width: 150
  },
  buttonText: {
    color: '#fff'
  },
  phrase: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    marginTop: 15
  },
  phrase0:{
    color: '#283444',
    fontSize: 26
  },
  phrase01:{
    color: '#283444',
    fontSize: 26
  },
});

export default styles;