import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 0,
        bottom: 10,
        width: 100,
        height: 100,
        elevation: 0,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFA41B",
        zIndex: 8,
        margin: 20,
        marginBottom: 100,
    },
    cartText: {
        position: "absolute",
        right: 0,
        top: 0,
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF0000",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        zIndex: 10,
        alignContent: "center",
        textAlign: "center",
    },

});

export default styles;