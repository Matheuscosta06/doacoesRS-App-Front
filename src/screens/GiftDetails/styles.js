import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#24396e",
        paddingBottom: "100%",
        width: '100%',
        alignItems: 'center',
    },
    imgContainer: {
        alignItems: 'center',
        backgroundColor: '#d7d7d7',
        padding: 20,
        width: '100%',
    },
    img: {
        width: '100%',
        height: 194,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5,

    },
    infoContainer: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        width: '90%',
        height: '100%',
        marginTop: 20,
        borderRadius: 20,
        borderColor: '#fda31b',
        borderWidth: 5,
    },
    txt: {
        color: "black",
        fontSize: 20,
        margin: 10,
        fontFamily: "JosefinSans_700Bold",
    },
    input: {
        color: "lightgray",
        fontSize: 20,
        fontFamily: "JosefinSans_500Medium",

    },
    arrowBack: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    addDonations: {
        backgroundColor: '#fda31b',
        padding: 15,
        borderRadius: 10,
        width: 150,
        alignItems: 'center',
        marginTop: 20,
    },
});
export default styles;