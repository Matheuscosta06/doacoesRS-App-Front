import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "white",
  },
  img: {
    width: 128,
    height: 128,
  },


  qtdProductsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
  qtd: {
    fontSize: 20,
  },

  multipleButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  multipleButtons: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },

  addCart: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },


  addCartText: {
    color: "white",
    fontSize: 20,
  },

});

export default styles;