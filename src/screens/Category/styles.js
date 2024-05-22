import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242e46",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
    fontFamily: 'JosefinSans_700Bold',
  },
  card: {
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    width: "100%",

  },

  cardzin: {
    backgroundColor: '#FFA41B',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    display: 'flex',
    flexDirection: 'row',


  },
  cardText: {
    color: '#000',
    fontSize: 24,
    marginRight: 10,
    fontFamily: 'JosefinSans_700Bold',
  },
  piximg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 0,




  },

});

export default styles;
