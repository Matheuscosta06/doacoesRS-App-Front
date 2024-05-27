import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles'

const Notice = ({ imagem, nome, data, titulo, descricao, noticia  }) => {
  return (
    <View style={styles.container}>

       <Image
    source={imagem}
    style={styles.imgNotice}
  />

  <View style={styles.line01}>
    <Text style={styles.nome}>{nome}</Text> 
    <Text style={styles.data}>{data}</Text>
  </View>

  <Text style={styles.titulo}>{titulo}</Text>

  <Text style={styles.descricao}>{descricao}</Text>

  <View style={styles.noticia}>
    <Text style={styles.noticiaText}>{noticia}</Text>
  </View>
    </View>
    
  );
};

export default Notice