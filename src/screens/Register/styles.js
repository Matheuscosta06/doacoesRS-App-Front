import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: "#232f47",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: "#1f3b6f",
    borderColor: "#9aa6be",
    borderWidth: 4,
    borderRadius: 25,
    padding: 60,
    paddingBottom: 190,
    alignItems: "center",
    justifyContent: "center"
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff"
  },
  button: {
    backgroundColor: "#ffa41b",
    padding: 20,
    borderRadius:25,
    width: 230,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff"
  },
  input: {
    width: 230,
    margin: 10,
    fontSize: 24,
  }
});

export default styles;