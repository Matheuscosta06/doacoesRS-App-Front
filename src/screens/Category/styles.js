import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242e46",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "josefin-sans-regular"
  },
  titulo: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold", 
    textAlign: "center",
    marginTop: 50,

  },

  maps: {
    flex: 1,
    resizeMode: "cover",
    width: "60",
    height: "90",
    opacity: 0.5,
    marginTop: 15,
  },

});

export default styles;