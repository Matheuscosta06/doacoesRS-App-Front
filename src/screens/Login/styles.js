import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#242e46",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    width: "90%",
    backgroundColor: "#24396e",
    borderRadius: 40,
    padding: 20,
    borderColor: "#FFA41B",
    borderWidth: 4,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "JosefinSans_700Bold",
  },
  containerLogin: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomColor: "#FFA41B",
    borderBottomWidth: 2,
    color: "#fff",
  },
  input: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 15,
    fontFamily: "JosefinSans_500Medium",
  },
  txt: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
  },
  button: {
    backgroundColor: "#FFA41B",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,

  },
  txtNeedAcc: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },
  yellow: {
    color: "#FFA41B",
  }
});

export default styles;