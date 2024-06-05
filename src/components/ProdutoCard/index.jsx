import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles'; // Certifique-se de importar o arquivo de estilos correto

const ProdutoCard = ({ produto, showPopup, add, remove, addMultiple, addProduct, setQuantities, popUp, setShowPopup }) => {
  return (
    <View key={produto.id} style={styles.cardInfo}>
      <View style={styles.imgContainer}>
        <Image source={`${produto.image}`} style={styles.imagem} />
      </View>

      <View style={styles.descContainer}>
        <View style={styles.desc}>
          <Text style={styles.nameCard}>{produto.name}</Text>
          <Text style={styles.preco}>R${produto.value}</Text>
        </View>

        {
          showPopup && (
            <View style={styles.quantidadeProdutos}>
              <TouchableOpacity onPress={() => add(produto.id)} style={styles.mais} >
                <Text style={styles.maisButton}>+</Text>
              </TouchableOpacity>
              <Text style={styles.quantidade}>{quantities[produto.id] || 0}</Text>
              <TouchableOpacity onPress={() => remove(produto.id)} style={styles.menos}>
                <Text style={styles.menosButton}>-</Text>
              </TouchableOpacity>
            </View>
          )
        }
        <View style={styles.multipleButtonsContainer}>
          <TouchableOpacity onPress={() => addMultiple(produto.id, 2)} style={styles.multipleButtons} >
            <Text style={styles.maisButton}>+2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addMultiple(produto.id, 6)} style={styles.multipleButtons} >
            <Text style={styles.maisButton}>+6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addMultiple(produto.id, 12)} style={styles.multipleButtons} >
            <Text style={styles.maisButton}>+12</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => addProduct(produto.id, quantities[produto.id] || 0) || setQuantities({})} style={styles.addcarrinho}>
          <Text style={styles.addcarrinhoText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity onPress={() => { popUp(produto.id); setShowPopup(false); }} style={styles.exit}>
        <AntDesign name="left" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default ProdutoCard;