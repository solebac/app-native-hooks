import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {carregaProdutores} from '../../../servicos/carregaDados';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [produtores, setProdutores] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setLista(retorno.lista);
    setProdutores(retorno.titulo);
    console.log(produtores, lista, retorno);
  }, []);
  const TopoLista = () => {
    ////ListHeaderComponent={() => <Text>{produtores}</Text>}></FlatList>
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{produtores}</Text>
      </>
    );
  };
  return (
    <FlatList
      data={lista}
      //renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}></FlatList>
  );
}
const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
