import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#24396e",
    alignItems: "center",
    justifyContent: "center"
  },
  txt1: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "JosefinSans_700Bold",
  },
  
  icones1: {
    display: 'flex',
    flexDirection: 'row',
  },
  icones2: {
    display: 'flex',
    flexDirection: 'row',
  },

  card: {
    marginTop: 30,
    backgroundColor: '#ffa41b',
    width: 160,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#fff'
  },
  
  cardInside:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  cardText: {
    fontFamily: 'JosefinSans_700Bold',
    color: '#fff',
    marginTop: 20,
    fontSize: 24
  },

  card2: {
    marginTop: 30,
    backgroundColor: '#ffa41b',
    width: 160,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#fff',
    marginLeft: 34
  },

  cardTextFood: {
    marginLeft: 25,
    fontFamily: 'JosefinSans_700Bold',
    color: '#fff',
    marginTop: 15,
    fontSize: 20
  },

  input: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",

  },
  Inputcontainer1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomColor: "#FFA41B",
    borderBottomWidth: 2,
    color: "#fff",
    fontFamily: "JosefinSans_500Medium",
    padding: 40,
    marginBottom: 100,
  },
  Inputcontainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomColor: "#FFA41B",
    borderBottomWidth: 2,
    color: "#fff",
    fontFamily: "JosefinSans_500Medium",
    padding: 40,

  },
  button: {
    backgroundColor: "#FFA41B",
    paddingHorizontal: 60,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,

  },
  txtbtn: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
  },

});

export default styles;