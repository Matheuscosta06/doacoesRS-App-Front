import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        
    },
    productList: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    productCard: {
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
    },
    img: {
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
        color: '#777',
    },
    qtdProductsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    qtd: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#555',
    },
    multipleButtonsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    multipleButtons: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#FF6347',
        borderRadius: 5,
    },
    textButton: {
        color: '#FFF',
        fontSize: 16,
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