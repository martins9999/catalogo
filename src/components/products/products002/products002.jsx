import V10282 from '../../../assets/brinquedos-acessorios/v-10282.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { ContainerINC, ContainerPIA, ContainerProd, ContentINC, ContentPIA, ContentProd, Info } from '../style.products';
import { CgAdd } from 'react-icons/cg';
import { BsCart4 } from 'react-icons/bs';

const products = [
  {
      imag:V10282,
      nome: "Varinha Bolinha de Guizo com Pelúcia",
      medidas:"Medidas: 35cm",
      ref:"Código: 10282",
      a1:"1x Varinha bolinha de guizo com pelúcia",
      preco: 6.90,
  },
]

function Products002 () {

    const { adicionarItem, formatarMoeda, info, setInfo } = useContext(UseContext);

    const newProducts = products.map((it) => {
        return {
            ...it, preco: (it.preco * 0.15 + it.preco).toFixed(2),
            precoPix: ((it.preco * 0.15 + it.preco) - (it.preco *  0.15 + it.preco) * 0.05).toFixed(2)
        }
    })

    return (
        <ContainerProd>
            {
                newProducts.map(it => (
                    <ContentProd height="390px">
                    <ContainerINC info={info}>
                        <img alt="" src={it.imag} />
                        <ContentINC>
                            <b>{it.nome}</b>
                            <b>{it.ref}</b>
                        </ContentINC>
                    </ContainerINC>
                    <Info height="63%" info={info}>
                        <span>{it.material}</span>
                        <span>{it.medidas}</span>
                        <span>{it.diametroE}</span>
                        <span>{it.diametroI}</span>
                        <span>{it.recomendado}</span>
                        <span>{it.a1} {it.a2}</span>
                    </Info>
                    <ContainerPIA>
                        <span>À Vista <preco>{ formatarMoeda(it.preco * 1) }</preco> + valor do frete</span>
                        <span> No Pix <preco>{formatarMoeda(it.precoPix * 1)}</preco> + valor do frete</span>
                        <ContentPIA>
                            <button1 onClick={()=>setInfo(!info)}>{info ? 'Ver Foto' : 'Informações'}</button1>
                            <button2 onClick={() => adicionarItem(it.ref, newProducts)}>Adicionar <CgAdd /> <BsCart4 /></button2>
                        </ContentPIA>
                    </ContainerPIA>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
}
export default Products002;