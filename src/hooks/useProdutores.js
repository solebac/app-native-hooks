import {useState, useEffect} from 'react';
import {carregaProdutores} from '../servicos/carregaDados';

export default function useProdutores() {
  const [produtores, setProdutores] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setLista(retorno.lista);
    setProdutores(retorno.titulo);
    console.log(produtores, lista, retorno);
  }, []);

  return [produtores, lista];
}
