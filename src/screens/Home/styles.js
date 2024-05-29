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
    borderBottomEndRadius: 50,
  },
  header: {
    marginBottom: 110,
  },
  
  imgHeader: {
    width: 350,
    height: 330,
    marginTop: -55,
    marginLeft: 210
  },
  titleHeader: {
    marginLeft: 20,
    marginTop: -50
  },
  title0: {
    color: '#fff',
    fontSize: 50,
    fontFamily: "JosefinSans_500Medium",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title01: {
    fontFamily: "JosefinSans_500Medium",
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
  blueLine: {
    backgroundColor: "#283444",
    height: 3.5,
    width: "47%",
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: '#fff',
    fontFamily: "JosefinSans_500Medium"
  },
  phrase: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    marginTop: 40
  },
  phrase0: {
    color: '#283444',
    fontSize: 26,
    fontFamily: "JosefinSans_700Bold"
  },
  phrase01: {
    color: '#283444',
    fontSize: 26,
    fontFamily: "JosefinSans_700Bold"
  },
  btn_doacoes: {
    marginTop: 40,
    alignItems: 'center'
  },
  button_doar: {
    backgroundColor: '#fff',
    width: 400,
    height: 200,
    borderWidth: 8,
    borderColor: "#faab14",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText_doar: {
    fontSize: 21,
    color: '#283444',

  },
  buttonText_doar1: {
    fontSize: 21,
    color: '#faab14',
  },
  button_doar1: {
    marginTop: 20,
    backgroundColor: '#fff',
    width: 400,
    height: 200,
    borderWidth: 8,
    borderColor: "#283444",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleHome: {
    alignItems: 'center',
  },
  titleName: {
    marginTop: 40,
    color: '#283444',
    fontSize: 32,
    alignItems: 'center'
  },
  estatisticas: {
    marginTop: 15,
    alignItems: 'center',
  },
  estatistica1: {
    backgroundColor: '#fff',
    width: 400,
    height: 250,
    borderWidth: 8,
    borderColor: "#faab14",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info1: {
    color: '#283444',
    fontSize: 42,
  },
  estatistica2: {
    marginTop: 15,
    backgroundColor: '#fff',
    width: 400,
    height: 250,
    borderWidth: 8,
    borderColor: "#faab14",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info2: {
    color: '#283444',
    fontSize: 42,
  },
  estatistica3: {
    marginTop: 15,
    backgroundColor: '#fff',
    width: 400,
    height: 250,
    borderWidth: 8,
    borderColor: "#faab14",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoCidade1: {
    color: '#283444',
    fontSize: 32,
  },
  infoCidade2: {
    color: '#283444',
    fontSize: 32,
  },
  infoCidade3: {
    color: '#283444',
    fontSize: 32,
    marginBottom: 5
  },
  titleInfo: {
    color: '#faab14',
    fontSize: 32
  },
  attEstatisticas: {
    color: '#bab8b8'
  }
});

export default styles;