import V10282 from '../../../assets/brinquedos-acessorios/v-10282.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { PiShoppingCart } from 'react-icons/pi';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';

let taxa = 0.15;
const products = [
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
  {
      imagem:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      id:10218,
      preco: 7,
  },
]

function Products002 () {

  const { adicionarItem } = useContext(UseContext);

  return (
    <>
      <ContainerProd>
      {
          products.map((it) => (
            <ContentProd height="350px" heightImg="60%">
                <img alt="" src={it.imagem}  />
                <TextProd height="30%">
                    <b>{it.nome}</b>
                    <spam>Medidas: {it.medidas} cm</spam>
                    <spam>Código: {it.id}</spam>
                    <b>Á vista R$ { (it.preco * taxa + it.preco).toFixed(2) } + valor do frete</b>
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