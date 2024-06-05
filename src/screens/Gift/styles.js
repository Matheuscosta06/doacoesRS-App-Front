import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 150,
    backgroundColor: "#24396e",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 150,
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
  image: {
    width: 130,
    height: 100,
    
  },
  card: {
    marginTop: 30,
    backgroundColor: '#ffa41b',
    width: 160,
    height: 180,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#fff',
  
  },
  
  cardInside:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  btn: {
    backgroundColor: "#FFA41B",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 100,
   },
   containerbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
   },
  cardText: {
    fontFamily: 'JosefinSans_700Bold',
    color: '#fff',
    marginTop: 20,
    fontSize: 18
  },
  cardcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 30,
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