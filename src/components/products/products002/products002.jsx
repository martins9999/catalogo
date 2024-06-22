import CA10230 from '../../../assets/casas-arranhadores/c-a-10230.jpg';
import V10175 from '../../../assets/brinquedos-acessorios/v-10175.jpg';
import V10282 from '../../../assets/brinquedos-acessorios/v-10282.jpg';
import V10283 from '../../../assets/brinquedos-acessorios/v-10283.jpg';
import V10284 from '../../../assets/brinquedos-acessorios/v-10284.jpg';
import V10285 from '../../../assets/brinquedos-acessorios/v-10285.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { PiShoppingCart } from 'react-icons/pi';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';

const products = [
  {
      imagem:V10282,
      title: 'Varinha Bolinha de guizo com Pelúcia',
      medidas:'Medidas: '+'35',
      id:10218,
      price: 7,
  },
  {
      imagem:V10284,
      title: 'pragmatic2',
      medidas:'Medidas: '+'35',
      id: 10284,
      price: 13.99,
  },
  {
      imagem:V10285,
      title: 'pragmatic3',
      medidas:'Medidas: '+'35',
      id: 10285,
      price: 9,
  }
]

function Products002 () {

  const { shoppingCart, setShoppingCart, adicionarItem, removerItem } = useContext(UseContext);

  return (
      <ContainerProd>
      {
          products.map(item => (
            <ContentProd>
                <img alt="" src={item.imagem}  />
                <TextProd>
                    <b>{item.title}</b>
                    <spam>{item.medidas}</spam>
                    <spam>{item.id}</spam>
                    <b>{item.price}</b>
                </TextProd>
                <ButtonsProd>
                    <button onClick={() => adicionarItem(item.id, products)}>Adicionar<PiShoppingCart /></button>
                </ButtonsProd>
            </ContentProd>
          ))
      }
      </ContainerProd>
  )
        // <ProductContainer>
        //     {items.map((item) => (
        //         <ProductContent >
        //             <img alt="" src={item.image}  />
        //             <b>{item.nome}</b>
        //             <span>{item.medidas}cm</span>
        //             <span>{item.codigo}</span>
        //             <b color='red'>à Vista <b style={{color:'blue'}}>R$ {(item.preco * 0.15 + item.preco).toLocaleString()}</b>  + Taxa de entrega</b>
        //             <b style={{color:'red'}} >Consultar valor à prazo</b>
        //         </ProductContent>
        //     ))}
        // </ProductContainer>
}
export default Products002;