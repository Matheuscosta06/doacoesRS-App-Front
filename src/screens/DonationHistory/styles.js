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
  popUpContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    transform: [{ translateY: -50 }],
    marginTop: "50%",
    width: 300,
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popUpImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  popUpText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: "#224062",
    fontSize: 23,
    fontFamily: "JosefinSans_700Bold",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
    marginBottom: 10,
  },
  popUpText: {
    fontSize: 16,
    fontFamily: "JosefinSans_500Medium",
    marginBottom: 5,
  },
  popUpTextTitle: {
    color: "#224062",
    marginTop: 3,
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
  },
  x: {
    alignSelf: 'flex-end',
  },
});

export default styles;