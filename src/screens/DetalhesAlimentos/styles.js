
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: "50%",
    },
    tituloContainer: {
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 20,
    },
    primeiraLetra: {
        fontSize: 70,
        color: '#283444',
        fontWeight: 'bold',
        marginBottom: -8,
    },
    titulo1: {
        fontSize: 40,
        color: '#283444',
        marginTop: "auto",
        fontWeight: 'bold',
    },
    linhaLaranja: {
        height: 5,
        backgroundColor: '#FF7D04',
        marginHorizontal: 30,
        marginRight: "25%",
        marginTop: -10,
    },
    subtitulocontainer: {
        paddingLeft: "40%",
        paddingTop: 20,
    },
    subtitulo: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 1,

    },
    linhaLaranja2: {
        height: 5,
        backgroundColor: '#FF7D04',
        marginHorizontal: 30,
        marginLeft: "30%",
        marginTop: -7,
    },
    containerProdutos: {
        flexDirection: 'row',
        marginTop: "5%",
        marginLeft: "10%",
        marginRight: "10%",
        backgroundColor: "#6b0404",
        borderRadius: 10,
        padding: 10,


    },
    imagem: {
        width: 160,
        height: 190,
    },
    desc: {
        flexDirection: 'column',
        marginTop: "2%",


    },
    tituloDesc: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    preco: {
        fontSize: 20,
        paddingTop: 10,
        color: 'lightgreen',
        fontWeight: 'bold',
    },
    quantidadeProdutos: {
        borderColor: 'red',
        borderWidth: 3,
        flexDirection: 'row',
        marginTop: "20%",
        color: 'white',
        marginRight: "35%",
        fontWeight: 'bold',
        borderRadius: 10,
    },
    mais: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menos: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    maisButton: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    menosButton: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    quantidade: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
    },
    addcarrinho: {
        borderColor: 'red',
        borderWidth: 3, 
        flexDirection: 'row',
        marginTop: "10%",
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10,
    },
    addcarrinhoText: {
        fontSize: 15,
        color: 'white',
        marginTop: "5%",
        marginBottom: "5%",
    },


});

export default styles;