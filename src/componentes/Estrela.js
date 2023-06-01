import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const estilos = estilosFunc(grande);
  const getImagem = index => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };
  return (
    <>
      <TouchableOpacity onPress={onPress} disabled={desabilitada}>
        <Image source={getImagem()} style={estilos.star} />
      </TouchableOpacity>
    </>
  );
}

const estilosFunc = grande =>
  StyleSheet.create({
    star: {
      height: grande ? 36 : 16,
      width: grande ? 36 : 16,
      marginRight: 2,
    },
  });
