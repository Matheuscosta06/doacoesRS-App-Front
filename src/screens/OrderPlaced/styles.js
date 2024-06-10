import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,

  },
  container2: {
    marginBottom: "30%",
  },
  containerIcon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  containerOrderPlaced: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtDoacao: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  containerCod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtCod: {
    fontSize: 22,
    marginRight: 10,
    color: '#555',
  },
  txtThank: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  cardProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#ffab14',
  },
  image: {
    width: 150,
    height: 150,
    margin:"auto",
  },
  imageProduct: {
    width: 95,
    height: 95,
    marginRight: 10,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
  },
  txtNameProduct: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  containerValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtValue: {
    fontSize: 20,
    marginRight: 5,
    color: '#555',
    fontWeight: 'bold',
  },
  txtPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA41B',
  },
  txtQuantity: {
    fontSize: 16,
    color: '#555',
  },
  containerPurchase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
    paddingBottom: 160,
  },
  containerTotal: {
    alignItems: 'center',
  },
  titleTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  txtPriceAll: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA41B',
  },
  btn: {
    backgroundColor: '#FFA41B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
