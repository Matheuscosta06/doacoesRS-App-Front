import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    mainContainer: {
        flex: 1,
        paddingBottom: "70%",

      
    },
    qrContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    qr: {
        width: 250,
        height: 250,
        borderWidth: 4,
        borderColor: '#000',
        alignItems:'center',
        borderRadius: 8,
        marginLeft: 35

    },
    txt1: {
        color: "#fff",
        fontSize: 70,
        fontWeight: "bold",
        fontFamily: "josefinSans_700Bold",
        marginTop: 40,
        marginLeft: 20,
        color:'#283444'
    
      },
      txt2: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "josefinSans_700Bold",
        marginLeft: 180,
        marginTop: 20,
      },
      linha1: {
        width: 270,
        height: 4,
        backgroundColor: "#ffA41B",
        marginRight: 110,
    
      },
      linha2: {
        width: 200,
        height: 4,
        backgroundColor: "#ffA41B",
        marginLeft: 180,
      },
     
      box: {
        width: 300,
        height: 150,
        backgroundColor: "#000",
        opacity: 0.7,
        borderRadius: 8,
        marginTop: 50,
        padding: 10,
        marginLeft:50,
      
      },
      text: {
        color: "#fff",
        fontSize: 25,
        fontFamily: "josefinSans_700bold",
        textAlign: "center",
      },
      Chaveeqr: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 50,
       
      },
      textchave: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "josefinSans_700Bold",
        textAlign:'center',
        marginTop: 20,
      },
      txtinho: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "josefinSans_700Bold",
        textAlign: "center",
        marginTop: 20,
      },


    


});
