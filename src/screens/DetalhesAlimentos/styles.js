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
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    marginBottom: 120,
  },
  productCard: {
    backgroundColor: "#710202",
    width: '80%',
    margin: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    gap: 17,
    marginLeft: 10,

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27a747",
  },
  img: {
    width: 128,
    height: 128,
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

  cardImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  arrowBack: {
    position: "absolute",
    top: 10,
    left: 10,

  },

  viewCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    width: '80%',
    margin: 10,
    borderRadius: 10,
    height: 400,

  },

  qtdProductsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

});

export default styles;