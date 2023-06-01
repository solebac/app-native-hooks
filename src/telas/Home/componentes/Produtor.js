import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.information}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
      {/* <Text>{estrelas}</Text> */}
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4, //somente para android | IOS -> shadowColor:#fff, shadowOffset:{width:0, heigt:4}, shadowOpacity:0.23, shadRadius:2.62
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 16,
    marginVertical: 16,
  },
  nome: {fontSize: 14, lineHeight: 22, fontWeight: 'bold'},
  distancia: {fontSize: 12, lineHeight: 19},
});
