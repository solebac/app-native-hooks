import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores() {
  const [produtores, setProdutores] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setLista(retorno.lista);
    setProdutores(retorno.titulo);
    console.log(produtores, lista, retorno);
  }, []);
  return (
    <>
      <Text>{produtores}</Text>
    </>
  );
}
const estilos = StyleSheet.create({});
