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

  titleHome: {
    alignItems: 'center',
  },
  titleName: {
    marginTop: 40,
    color: '#283444',
    fontSize: 32,
    alignItems: 'center'
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
  btn_comprar:{
    width: 270,
    height: 120,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#ffab14',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn_comprar2:{
    marginTop: 10,
    width: 270,
    height: 120,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#ffab14',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img01:{
    marginLeft: 20
  },
  textDiv:{
    marginLeft: 20
  },
  btnText_comprar: {
    textAlign: 'center',
    fontFamily: "JosefinSans_500Medium",
  },
  estatisticas:{
    width: '100%',
    backgroundColor: '#ffab14',
    alignItems: 'center',
    height: '40%',
    marginTop: 80
  },

  estatisticasTitle:{
    marginTop: 10,
    fontFamily: "JosefinSans_700Bold",
    color: '#fff',
    fontSize: 26
  },
  blueLine2: {
    backgroundColor: "#283444",
    height: 3.5,
    width: "60%",
    marginVertical: 10,
    alignSelf: "center",
  },
  blueLine1: {
    backgroundColor: "#283444",
    height: 3.5,
    width: "60%",
    alignSelf: "center",

  },
  cards:{
    alignItems: 'center',
    marginTop: 30
  },
  card1: {
    marginTop: 30,
    alignItems: 'center',
    width: 280,
    height: 150,
    borderColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 4,
    justifyContent: 'center'
  },
  card2: {
    marginTop: 30,
    alignItems: 'center',
    width: 280,
    height: 150,
    borderColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 4,
    justifyContent: 'center'
  },
  card3: {
    marginTop: 30,
    alignItems: 'center',
    width: 280,
    height: 150,
    borderColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 4,
    justifyContent: 'center'
  },
  IncidentesNumber:{
    fontSize: 36,
    fontFamily: "JosefinSans_700Bold",
    color: '#fff'
  },
  IncidenteName:{
    fontFamily: "JosefinSans_700Bold",
    color: '#fff',
    fontSize: 18,
    marginTop: 10
  },
  IncidentesCity:{
    fontSize: 30,
    fontFamily: "JosefinSans_700Bold",
    color: '#fff',
    alignItems: 'baseline',
    textAlign: 'center'
  },
  aviso: {
    color: '#fff',
    fontFamily: "JosefinSans_700Bold",
    fontSize: 16,
    marginTop: 10
  }

});

export default styles;