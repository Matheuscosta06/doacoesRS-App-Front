import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "70%",
    },
  tituloContainer:{
    flexDirection: 'row',
    paddingLeft:40,
    paddingRight:20,
    paddingTop: 20,
  },
  primeiraLetra:{
      fontSize: 70,
      color: '#283444',
      fontWeight: 'bold',
      marginBottom: -8,
  },
  cardInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    padding: 10,
    width: '80%',
    height: '80%',
    borderWidth: 5,
    borderColor: "#FFA41B",
    

  },
  exit: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    margin: 10,
    
  },
  fecharText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  addcarrinho: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    margin: 10,
  },
    addcarrinhoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    },

    quantidade: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    },

    menos: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    },
    menosButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    },
    mais: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    },
    maisButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,

    textAlign: 'center',

    },


  titulo1:{
      fontSize: 40,
      color: '#283444',
      marginTop: "auto",
      fontWeight: 'bold', 
  },
  linhaLaranja:{
      height:5,
      backgroundColor: '#FF7D04',
      marginHorizontal: 30,
      marginRight:"25%",
      marginTop: -10,
  },    
  subtitulocontainer:{
      paddingLeft: "40%", 
      paddingTop: 20,
  },
  subtitulo:{
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
      zIndex: 1,

  },
  linhaLaranja2:{
      height:5,
      backgroundColor: '#FF7D04',
      marginHorizontal: 30,
      marginLeft:"30%",
      marginTop: -7,
  },
  containerProdutos:{
      flexDirection: 'row',
      marginTop: "5%",
      marginLeft: "10%",
      marginRight: "10%", 
      backgroundColor:"#6b0404",
      borderRadius: 10,
      padding: 10,
      

  },
  imagem:{
      width: 160,
      height: 190,
  },
  desc:{
    flexDirection: 'column',
    marginTop: "2%",
    
        
  },
  tituloDesc:{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
  },
  preco:{
      fontSize: 20,
      paddingTop: 10,
      color: 'lightgreen',
      fontWeight: 'bold',
  },
  quantidadeProdutos:{
      borderColor: 'red',
      borderWidth: 3,
      flexDirection: 'row',
      marginTop: "20%",
      color: 'white',
      marginRight: "35%",
      fontWeight: 'bold',
      borderRadius: 10,
  },



});

export default styles;