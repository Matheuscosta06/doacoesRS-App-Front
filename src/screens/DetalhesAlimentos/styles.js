import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    paddingBottom: "0",
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
    position: 'fixed',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: '80%',
    height: 400,
    borderWidth: 5,
    borderColor: "#FFA41B",

  },
  descContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,

  },
  exit: {
    marginTop: 10,
    marginLeft: 10,
    position: 'absolute',

  },
  fecharText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  addcarrinho: {
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
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

    menosButton: {
    color: '#FFA41B',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    },
    mais: {
    margin: 10,
    },


    multipleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },

    multipleButtons:{
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      width: '30%',
    },
    
    menos: {  
      margin: 10,
      },
    maisButton: {
    color: '#FFA41B',
    fontWeight: 'bold',
    fontSize: 20,

    textAlign: 'center',

    },

    quantidadeProdutos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    },
    imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
    },

    nameCard: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
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



});

export default styles;