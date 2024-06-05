import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
  },
  titlex: {
    textAlign: 'center',
    fontFamily: "JosefinSans_700Bold",
    fontSize: 26,
    color: '#283444',
    marginTop: 50,

  },
  donatesGraphic: {
    alignItems: 'center'
  },
  containerPorcetage: {
    backgroundColor: '#283444',
    flexDirection: 'row',
    width: '80%',
    padding: 4,
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderLeftWidth:4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: '#ffa41b'
  },
  txtPctg: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
  containerGrafico: {
    width: '80%',
    backgroundColor: "#fff",
    paddingTop: 20,
    borderLeftWidth:4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#ffa41b'

  },
  grafico: {
    width: 'auto',
    alignItems: 'center',
    marginBottom: 20
  },
  percentage: {
    borderWidth: 2,
    transform: [{ scaleX: 1.0 }, { scaleY: 2.0 }],
    width: '50%'
  },
  totalProgressBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#eee',
  },
  pet: {
    backgroundColor: 'rgba(12, 236, 184, 0.5)'
  },
  progress_pet: {
    backgroundColor: '#008B6B'
  },
  hygiene: {
    backgroundColor: '#65FBF2'
  },
  progress_hygiene: {
    backgroundColor: '#11D1C6'

  },
  clothes: {
    backgroundColor: '#AD1DC5'
  },
  progress_clothes: {
    backgroundColor: '#620A71'
  },
  food: {
    backgroundColor: '#FB6565'
  },
  progress_food: {
    backgroundColor: '#C70808'
  },
  completedProgressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#FFA41B',
  },
  progressBarText: {
    position: 'absolute',
    top: "50%",
    transform: [{ translateY: -10 }],
    left: 10,
    right: 0,
    bottom: 0,
    fontFamily: "JosefinSans_500Medium",
    fontSize: 20
  },
  completedText: {
    position: 'absolute',
    top: "50%",
    transform: [{ translateY: -10 }],
    zIndex: 7,
    left: "auto",
    right: 0,
    bottom: 0,
    fontFamily: "JosefinSans_500Medium",
    fontSize: 20,
  },
});

export default styles;