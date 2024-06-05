import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imgBg: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  titulo: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    fontFamily: 'JosefinSans_700Bold',
  },

  icones1: {
    display: 'flex',
    flexDirection: 'row',
  },
  icones2: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    marginTop: 30,
    backgroundColor: '#ffa41b',
    width: 160,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#fff'
  },

  card2: {
    marginTop: 30,
    backgroundColor: '#ffa41b',
    width: 160,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#fff',
    marginLeft: 34
  },

  cardInside: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardText: {
    fontFamily: 'JosefinSans_700Bold',
    color: '#fff',
    marginTop: 20,
    fontSize: 24
  },

  cardTextFood: {
    marginLeft: 25,
    fontFamily: 'JosefinSans_700Bold',
    color: '#fff',
    marginTop: 15,
    fontSize: 20
  },

  icones3: {
    marginTop: 50,
    alignItems: 'center',

  },

  cardPix: {
    width: 270,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffa41b',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#fff',


  },

  cardInsidePix: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  cardTextPix: {
    marginLeft: 20,
    fontFamily: 'JosefinSans_700Bold',
    color: '#fff',
    fontSize: 18,
    marginTop: 20
  },

});

export default styles;
