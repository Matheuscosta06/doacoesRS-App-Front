import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    mainContainer: {
        flex: 1,
        backgroundColor: '#d9d9d9',
    },
    background:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    
    contentContainer: {
        width: '85%',
        height: 950,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 140,
    },
    
    title: {
        marginTop: 20,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    
    box: {
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 5,
        width: '80%',
    },
    
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        fontFamily: 'JosefinSans-Bold',
        fontWeight: 'bold',
        color:'#fff',

    },

    text1: {
        fontSize: 22,
        lineHeight: 24,
        textAlign: 'justify',
        fontFamily: 'JosefinSans-Bold', 
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color:'#fff',
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

    },
});
