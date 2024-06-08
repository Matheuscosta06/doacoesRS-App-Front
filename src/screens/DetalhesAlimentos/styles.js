import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingBottom: '20%',
    },
    tituloContainer: {
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 20,
    },
    primeiraLetra: {
        fontSize: 80,
        color: '#283444',
        fontWeight: 'bold',
        marginBottom: -8,
    },
    titulo1: {
        fontSize: 50,
        color: '#283444',
        marginTop: 'auto',
        fontWeight: 'bold',
    },
    linhaLaranja: {
        height: 5,
        backgroundColor: '#FF7D04',
        marginHorizontal: 30,
        marginRight: '30%',
        marginTop: -10,
    },
    subtitulocontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
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
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: -7,
        marginBottom: 20,
    },
    productList: {
        paddingHorizontal: 20,
    },
    productCard: {
        borderColor: '#FF7D04',
        borderWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewCardContainer: {
        borderColor: '#FF7D04',
        borderWidth: 5,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    productImageContainer: {
        marginRight: 15,
        alignItems: 'center',
    },
    img: {
        width: 210,
        height: 210,
        borderRadius: 15,
    },
    img2: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    desc: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 16,
        color: 'darkgreen',
    },
    qtdProductsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        margin: 'auto',
    },
    qtd: {
        marginHorizontal: 10,
        fontSize: 30,
        color: '#555',
    },
    multipleButtonsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        margin: 'auto',
    },
    buttons: {
        backgroundColor: '#FF6347',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    multipleButtons: {
        marginRight: 10,
        paddingHorizontal: 35,
        paddingVertical: 8,
        backgroundColor: '#FF6347',
        borderRadius: 5,
    },
    textButton: {
        color: '#FFF',
        fontSize: 20,
    },
    addCart: {
        backgroundColor: '#008000',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    addCartText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    arrowBack: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
});

export default styles;
