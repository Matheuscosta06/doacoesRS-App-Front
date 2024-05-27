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
    color: "#FFA41B"
  },
  solut: {
    fontSize: 35,
    marginLeft: 163,
    fontFamily: "JosefinSans_700Bold",
    color: "#FFA41B"
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
    height: 1250,
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
    fontSize: 28,
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
  linha:{
    margin: 50,
    width : 340,
    backgroundColor: "#FFA41B",
    height: 4,
    
  },
  nomeEquipe:{
   color: "#fff",
   fontSize: 40,
   marginTop: -10,
   fontFamily: "JosefinSans_700Bold",
  },
  fotoEquipe: {
    width: 400,
    height: 300,
  margin: "auto",
    
    borderRadius: 10,
  },
  cardImg:{
    width: 405,
    height: 305,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#FFA41B",
    margin: 40,
  },
  


});

export default styles;
