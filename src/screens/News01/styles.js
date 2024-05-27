
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgNews: {
    width:600,
    height: 300
  },
  line01:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  name: {
    marginLeft: 4,
    marginRight: 270
  },
  data: {
    color: '#faab14'
  },
  header: {
  justifyContent: 'center',
  alignItems: 'center'
  },
  title:{
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12
  },
  desc: {
    color: '#979696'
  },
  body: {
    marginTop: 70,
    alignItems: 'center'
  },
  noticia: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 2,
    borderColor: '#283444',
    width: 360,
    borderRadius: 25,
    marginTop: 12,
    marginBottom: 100
  },
  noticiaText: {
    textAlign: 'center',
    width: 310,
    margin: 10,
    color: '#283444'
  }
});

export default styles;
