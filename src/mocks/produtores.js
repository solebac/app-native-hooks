import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import salad from '../assets/produtores/salad.png';
import potager from '../assets/produtores/potager.png';

const geraNumberAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${geraNumberAleatorio(1, 500)}m`,
      estrelas: geraNumberAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${geraNumberAleatorio(1, 500)}m`,
      estrelas: geraNumberAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyJack,
      distancia: `${geraNumberAleatorio(1, 500)}m`,
      estrelas: geraNumberAleatorio(1, 5),
    },
    {
      nome: 'Potager Farm',
      imagem: potager,
      distancia: `${geraNumberAleatorio(1, 500)}m`,
      estrelas: geraNumberAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${geraNumberAleatorio(1, 500)}m`,
      estrelas: geraNumberAleatorio(1, 5),
    },
  ],
};
export default produtores;
