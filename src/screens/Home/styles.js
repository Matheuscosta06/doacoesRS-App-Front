import { StyleSheet } from "react-native";
import { Button } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9"
  },
  head: {
    backgroundColor: '#283444',
    display: 'flex',
    height: 450,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50
  },
  imgHeader: {
    width:350,
    height: 330,
    marginTop: -55,
    marginLeft: 230
  },
  titleHeader:{
    marginLeft: 20
  },
  title0: {
    color: '#fff',
    fontSize: 50,
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title01:{
    color: '#FFA41B',
    fontSize: 40
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#FFA41B",
    alignItems: "center",
    borderRadius: 10,
  }
});

export default styles;