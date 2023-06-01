import React from 'react';
import Produtores from './componentes/Produtores';
import Topo from './componentes/Topo';

const Home = () => {
  return (
    <>
      <Produtores topo={Topo} />
    </>
  );
};
export default Home;

{
  /**Old
    <Topo />
    <Produtores/> */
}
