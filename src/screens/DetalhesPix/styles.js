import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#242e46',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    box: {
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    Chaveeqr: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qr: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});