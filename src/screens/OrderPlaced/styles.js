import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 30,
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
    fontSize: 24,
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
    fontSize: 16,
    marginRight: 10,
    color: '#555',
  },
  txtThank: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
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
    width: 84,
    height: 84,
    marginRight: 10,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
  },
  txtNameProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  containerValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtValue: {
    fontSize: 16,
    marginRight: 5,
    color: '#555',
  },
  txtPrice: {
    fontSize: 16,
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
