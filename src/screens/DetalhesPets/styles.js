import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  tituloContainer:{
    flexDirection: 'row',
    paddingLeft:40,
    paddingRight:20,
    paddingTop: 20,
  },
  primeiraLetra:{
      fontSize: 80,
      color: '#283444',
      fontWeight: 'bold',
      marginBottom: -8,
  },
  titulo1:{
      fontSize: 50,
      color: '#283444',
      marginTop: "auto",
      fontWeight: 'bold', 
  },
  linhaLaranja:{
      height:5,
      backgroundColor: '#FF7D04',
      marginHorizontal: 30,
      marginRight:"50%",
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
});

export default styles;