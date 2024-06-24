import V10282 from '../../../assets/brinquedos-acessorios/v-10282.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { PiShoppingCart } from 'react-icons/pi';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';

const products = [
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10217,
      preco: 7.54,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo",
      medidas:"35",
      id:10218,
      preco: 12.97,
  },
  {
      imagem:V10282,
      nome: "guizo com Pelúcia",
      medidas:"35",
      id:10219,
      preco: 5.22,
  },

]

function Products002 () {

  const { adicionarItem, formatarMoeda  } = useContext(UseContext);

  return (
    <>
      <ContainerProd>
      {
          products.map((it) => (
            <ContentProd height="350px" heightImg="60%">
                <img alt="" src={it.imagem}  />
                <TextProd height="22%">
                    <b>{it.nome}</b>
                    <span>Medidas: <tt>{it.medidas}cm</tt></span>
                    <span>Código: <tt>{it.id}</tt></span>
                </TextProd>
                <ButtonsProd>
                    <b>Á Vista por <preco> { formatarMoeda(it.preco)} </preco> + valor do frete</b>
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