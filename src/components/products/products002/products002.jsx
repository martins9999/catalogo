import BR10177 from '../../../assets/brinquedos-acessorios/10177.png';
import BR10176 from '../../../assets/brinquedos-acessorios/10176.png';
import BR10280 from '../../../assets/brinquedos-acessorios/10280.png';
import BR10281 from '../../../assets/brinquedos-acessorios/10281.png';
import BR10282 from '../../../assets/brinquedos-acessorios/10282.png';
import BR10283 from '../../../assets/brinquedos-acessorios/10283.png';
import BR10175 from '../../../assets/brinquedos-acessorios/10175.png';
import BR10284 from '../../../assets/brinquedos-acessorios/10284.png';
import BR10174 from '../../../assets/brinquedos-acessorios/10174.png';
import BR10285 from '../../../assets/brinquedos-acessorios/10285.png';
import BR10286 from '../../../assets/brinquedos-acessorios/10286.png';
import BR10287 from '../../../assets/brinquedos-acessorios/10287.png';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { ContainerINC, ContainerPIA, ContainerProd, ContentINC, ContentPIA, ContentProd, Info } from '../style.products';
import { CgAdd } from 'react-icons/cg';
import { BsCart4 } from 'react-icons/bs';

const products = [
  {
      imag:BR10177,
      nome: "Varinha de Penas",
      ref:"Código: 10177",
      a1:"1x Varinha de penas",
      preco: 5.90,
  },
  {
      imag:BR10176,
      nome: "Varinha Ping Penas",
      ref:"Código: 10176",
      a1:"1x Varinha ping penas",
      preco: 5.90,
  },
  {
      imag:BR10280,
      nome: "Varinha Bolinha de Guizo com Penas",
      ref:"Código: 10280",
      a1:"1x Varinha bolinha de guizo com penas",
      preco: 5.90,
  },
  {
      imag:BR10281,
      nome: "Varinha Borboleta",
      ref:"Código: 10281",
      a1:"1x Varinha borboleta",
      preco: 8.90,
  },
  {
      imag:BR10282,
      nome: "Varinha Bolinha de Guizo com Pelúcia",
      ref:"Código: 10282",
      a1:"1x Varinha bolinha de guizo com pelúcia",
      preco: 6.90,
  },
  {
      imag:BR10283,
      nome: "Varinha Bolinha com Pelúcia",
      ref:"Código: 10283",
      a1:"1x Varinha bolinha com pelúcia",
      preco: 6.90,
  },
  {
      imag:BR10175,
      nome: "",
      ref:"Código: 10175",
      a1:"1x ",
      preco: 5.90,
  },
  {
      imag:BR10284,
      nome: "",
      ref:"Código: 10284",
      a1:"1x ",
      preco: 8.90,
  },
  {
      imag:BR10174,
      nome: "",
      ref:"Código: 10174",
      a1:"1x ",
      preco: 5.90,
  },
  {
      imag:BR10285,
      nome: "",
      ref:"Código: 10285",
      a1:"1x ",
      preco: 8.90,
  },
  {
      imag:BR10286,
      nome: "",
      ref:"Código: 10286",
      a1:"1x ",
      preco: 5.90,
  },
  {
      imag:BR10287,
      nome: "",
      ref:"Código: 10287",
      a1:"1x ",
      preco: 7.90,
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