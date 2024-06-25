import V10282 from '../../../assets/brinquedos-acessorios/v-10282.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';
import { CgAdd } from 'react-icons/cg';
import { BsCart4 } from 'react-icons/bs';

const products = [
  {
      imag:V10282,
      nome: "Varinha Bolinha de guizo com Pelúcia",
      medidas:"35",
      ref:10217,
      preco: 7.54,
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
                <img alt="" src={it.imag}  />
                <TextProd height="22%">
                    <b>{it.nome}</b>
                    <span>Medidas: <tt>{it.medidas}cm</tt></span>
                    <span>Código: <tt>{it.ref}</tt></span>
                </TextProd>
                <ButtonsProd>
                    <b>Á Vista por <preco> { formatarMoeda(it.preco * 1)} </preco> + valor do frete</b>
                    <button onClick={() => adicionarItem(it.ref, newProducts)}><CgAdd/><BsCart4/></button>
                </ButtonsProd>
            </ContentProd>
          ))
      }
      </ContainerProd>
    </>
  )
}
export default Products002;