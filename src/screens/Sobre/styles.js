import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA41B",
  },
  cardPrincipal: {
    backgroundColor: "#283444",
    width: "auto",
    height: 450,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  sobreA: {
    fontSize: 55,
    fontFamily: "JosefinSans_700Bold",
    color: "#fff",
    marginLeft: 32,
  },
  novaG: {
    marginTop: 15,
    fontSize: 35,
    marginLeft: 47,
    fontFamily: "JosefinSans_700Bold",
    color: "#FFA41B",
  },
  solut: {
    fontSize: 35,
    marginLeft: 163,
    fontFamily: "JosefinSans_700Bold",
    color: "#FFA41B",
  },
  fotoRS: {
    marginTop: -120,
    marginLeft: 200,
  },
  cardObj: {
    backgroundColor: "#fff",
    margin: 20,
    marginTop: 50,
    borderRadius: 20,
    height: 900,
  },
  tituloObj: {
    fontSize: 51,
    fontFamily: "JosefinSans_700Bold",
    color: "#000",
    marginTop: 50,

    textAlign: "center",
    margin: 15,
  },
  textObj: {
    fontSize: 23,
    padding: 0,
    margin: 20,
    textAlign: "center",
    fontFamily: "JosefinSans_500Medium",
    color: "#000",
  },
  cardEquipe: {
    backgroundColor: "#283444",
    marginTop: 20,
    alignItems: "center",
  },
  linha1: {
    margin: 50,
    width: 340,
    backgroundColor: "#FFA41B",
    height: 6,
    border: "none",
  },
  nomeEquipe: {
    color: "#fff",
    fontSize: 37,
    marginTop: -10,
    fontFamily: "JosefinSans_700Bold",
  },
  fotoEquipe: {
    width: 360,
    height: 300,
    margin: "auto",

    borderRadius: 10,
  },
  cardImg: {
    width: 365,
    height: 305,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#FFA41B",
    margin: 40,
  },
  linha2: {
    margin: 40,
    marginTop: 7,
    border: "none",
    width: 340,
    backgroundColor: "#FFA41B",
    height: 6,
  },
  backImg: {
    backgroundColor: "#283444",
    borderRadius: 140,
    width: 165,
    height: 165,
    alignItems: "center",
    marginBottom: -90,
    zIndex: 112,
    margin: "auto",
  },
  fotoMembro: {
    borderRadius: 140,
    width: 150,
    height: 150,
    margin: "auto",
  },
  cardDetalhe: {
    width: 340,
    height: 280,
    backgroundColor: "#D9D9D9",
    borderWidth: 5,
    borderColor: "#FFA41B",
    borderRadius: 25,
    textAlign: "center",
    margin: 30,
  },
  nomeMembro: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 20,
    fontFamily: " JosefinSans_700Bold",
  },
  membro: { textAlign: "center" },
  textMembro: {
    textAlign: "center",
    marginTop: 30,
    padding: 0,
    margin: 4,
  },
});

export default styles;
