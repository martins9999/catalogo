import V10282 from '../../../assets/brinquedos-acessorios/v-10282.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';
import { CgAdd } from 'react-icons/cg';
import { BsCart4 } from 'react-icons/bs';

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
      preco: 5.23,
  },

]

function Products002 () {

  const { adicionarItem, formatarMoeda  } = useContext(UseContext);

  const newProducts = products.map((it) => {
    return {...it, preco: (it.preco * 0.15 + it.preco).toFixed(2)}
  })

  return (
    <>
      <ContainerProd>
      {
          newProducts.map((it) => (
            <ContentProd height="350px" heightImg="60%">
                <img alt="" src={it.imagem}  />
                <TextProd height="22%">
                    <b>{it.nome}</b>
                    <span>Medidas: <tt>{it.medidas}cm</tt></span>
                    <span>Código: <tt>{it.id}</tt></span>
                </TextProd>
                <ButtonsProd>
                    <b>Á Vista por <preco> { formatarMoeda(it.preco)} </preco> + valor do frete</b>
                    <button onClick={() => adicionarItem(it.id, newProducts)}><CgAdd/><BsCart4/></button>
                </ButtonsProd>
            </ContentProd>
          ))
      }
      </ContainerProd>
    </>
  )
}
export default Products002;