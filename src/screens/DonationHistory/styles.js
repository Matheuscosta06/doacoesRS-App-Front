import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243f62",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "JosefinSans_700Bold",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#FFA41B",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
  },
  containerDonations: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },
  txtStatus: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: 'flex-end',
  },
  txt: {
    color: "#000",
    fontSize: 28,
    fontFamily: "JosefinSans_700Bold",
  },
  btn: {
    backgroundColor: "#2E5296",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "JosefinSans_700Bold",
  },
});

export default styles;