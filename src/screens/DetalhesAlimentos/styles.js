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
  productImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5d5d5",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
    padding: 20,
  },

  productCard: {
    backgroundColor: "#710202",
    width: '90%',
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

  qtdProductsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
    width: '90%',
    marginTop: 10,
  },
 
  buttons: {
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "#ffa41b",
    fontSize: 22,
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
    justifyContent: "space-between",
    width: '90%',
    margin: 10,


  },

  multipleButtons: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    padding: 10,
    width: '30%',
    borderWidth: 1,
    borderRadius: 5,
    borderRadius: 5,
  },

  addCart: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 5,
    width: '90%',
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
    width: '90%',
    margin: 10,
    borderRadius: 10,
    height: 500,
    borderColor: "#ffa41b",
    borderWidth: 6,

  },



});

export default styles;