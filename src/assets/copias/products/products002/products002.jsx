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

let taxa = 0.15;
const products = [
  {
      imagem:V10282,
      title: 'Varinha Bolinha de guizo com Pelúcia',
      medidas:'Medidas: '+'35',
      id:10218,
      preco: 7,
  },
  {
      imagem:V10284,
      title: 'pragmatic2',
      medidas:'Medidas: '+'35',
      id: 10284,
      preco:13.99,
  },
  {
      imagem:V10285,
      title: 'pragmatic3',
      medidas:'Medidas: '+'35',
      id: 10285,
      preco: 9,
  }
]

function Products002 () {

  const { shoppingCart, setShoppingCart, adicionarItem, removerItem } = useContext(UseContext);

  return (
    <>
      <ContainerProd>
      {
          products.map((it) => (
            <ContentProd height="430px" heightImg="49%">
                <img alt="" src={it.imagem}  />
                <TextProd height="46%">
                    <b>{it.title}</b>
                    <spam>{it.medidas}</spam>
                    <spam>{it.id}</spam>
                    <b>R$ { (it.preco * taxa + it.preco).toFixed(2) }</b>
                </TextProd>
                <ButtonsProd>
                    <button onClick={() => adicionarItem(it.id, products)}>Adicionar<PiShoppingCart /></button>
                    {/* <section>
                        <i>Qtd {item.quantity}</i>
                        <span>Total: R$ {(item.quantity * (item.product.price * 0.15 + item.product.price) ).toFixed(2)}</span>
                    </section> */}
                </ButtonsProd>
            </ContentProd>
          ))
      }
      </ContainerProd>
    </>
  )
}
export default Products002;