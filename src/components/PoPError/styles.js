import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    errors: {
        color: "#f27474",
        fontSize: 21,
        fontFamily: "JosefinSans_500Medium",
        textAlign: "center",
    },
    text: {
        color: "black",
        fontSize: 21,
        fontFamily: "JosefinSans_500Medium",
        textAlign: "center", 
    },
    screen: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: "center",
        justifyContent: "center",
      },
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: "90%",
        borderRadius: 40,
        marginBottom: 5,
        padding: 10,
        paddingBottom: 40,
        paddingTop: 40,
        position: "absolute",
        zIndex: 2,
        gap: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FFA41B",
        borderRadius: 20,
        marginBottom: 20,
        marginTop: 20,
        padding: 14,
        width: "80%",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontFamily: "JosefinSans_700Bold",
    },
});

export default styles;