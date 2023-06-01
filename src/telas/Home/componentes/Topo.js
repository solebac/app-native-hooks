import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../servicos/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: 'test',
    },
    lista: [],
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    //Em classe isso não é recomentado, set o state
    //this.state.topo = ...
    this.setState({topo: retorno}); //O setState entendeu com o update era somente no [topo]
    //setState divide o Object
    console.log(retorno);
  }
  componentDidMount() {
    this.atualizaTopo();
    console.log('Componente Montado');
  }
  render() {
    return (
      <View style={estilos.topo}>
        <Image style={estilos.imagem} source={logo} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  topo: {backgroundColor: '#f6f6f6', padding: 16},
  imagem: {width: 70, height: 28},
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {fontSize: 16, lineHeight: 26, color: '#a3a3a3'},
});
export default Topo;
