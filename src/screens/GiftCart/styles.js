import { all } from "axios";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tituloContainer: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 20,
    paddingTop: 20,
  },
  primeiraLetra: {
    fontSize: 80,
    color: '#283444',
    fontWeight: 'bold',
    marginBottom: -8,
  },
  titulo1: {
    fontSize: 50,
    color: '#283444',
    marginTop: "auto",
    fontWeight: 'bold',
  },
  linhaLaranja: {
    height: 5,
    backgroundColor: '#FF7D04',
    marginHorizontal: 30,
    marginRight: "32%",
    marginTop: -10,
  },
  subtitulocontainer: {
    paddingLeft: "40%",
    paddingTop: 20,
  },
  subtitulo: {
    fontSize: 40,
    color: '#283444',
    fontWeight: 'bold',
    zIndex: 1,

  },
  linhaLaranja2: {
    height: 5,
    backgroundColor: '#FF7D04',
    marginHorizontal: 30,
    marginLeft: "30%",
    marginTop: -7,
  },
  containerProduct: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#283444',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#FFA41B",
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: "70%",
  },
  x: {
    alignSelf: 'flex-end',
  },
  image: {
    width: 120,
    height: 130
  },
  titleName: {
    color: '#fff',
    fontSize: 25,
    fontFamily: "JosefinSans_700Bold",
  },
  txtPrice: {
    color: '#FFA41B',
    fontSize: 25,
    fontFamily: "JosefinSans_500Medium",
    textAlign: 'center',
    marginBottom: 3,
  },
  containerQntd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: 56,
    textAlign: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    fontFamily: "JosefinSans_700Bold",
  },
  allPrice: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 120,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  txtAll: {
    color: '#283444',
    fontSize: 25,
    fontFamily: "JosefinSans_700Bold",
  },
  txtAllPrice: {
    color: '#000',
    fontSize: 25,
    fontFamily: "JosefinSans_500Medium",
  },
  btnFinalizar: {
    backgroundColor: '#FFA41B',
    padding: 10,
    borderRadius: 8,
    marginLeft: "auto",
  },
  txtFinalizar: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
  },
});

export default styles;