import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerIcon: {
    backgroundColor: "#00b94a",
    padding: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  txtDoacao: {
    fontSize: 22,
    color: "#000",
    fontFamily: "JosefinSans_700Bold",
  },
  containerCod: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
  },
  containerOrderPlaced: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  txtCod: {
    fontSize: 18,
    color: "#000",
    fontFamily: "JosefinSans_500Medium",
  },
  txtThank: {
    marginTop: 3,
    fontSize: 22,
    color: "#000",
    fontFamily: "JosefinSans_700Bold",
  },
  cardProduct: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    width: "90%",
    borderColor: "#FFA41B",
    justifyContent: "space-between",
    borderWidth: 4,
    alignItems: "center",
  },
  txtNameProduct: {
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
  containerValue: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  txtValue: {
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
  txtPrice: {
    fontSize: 16,
    fontFamily: "JosefinSans_500Medium",
    color: "#FFA41B",
  },
  containerPurchase: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginBottom: "25%",
  },
  btn: {
    backgroundColor: "#FFA41B",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  titleTotal: {
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
  },
  txtPriceAll: {
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
    color: "#FFA41B",
  },
  txtBtn: {
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
    color: "#fff",
  },
  txtPurchasePix: {
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
    textAlign: "center",
    marginBottom: 10,
  },
  x: {
    alignSelf: 'flex-end',
  },
});

export default styles;