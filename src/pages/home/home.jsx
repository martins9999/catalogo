import { Barra, Button, HomeContainer} from "./style.home";
import CA10196 from '../../assets/casas-arranhadores/10196.png';
import CA10225 from '../../assets/casas-arranhadores/10225.png';
import BR10176 from '../../assets/brinquedos-acessorios/10176.png';
import CA10219 from '../../assets/casas-arranhadores/10219.png';
import BR10281 from '../../assets/brinquedos-acessorios/10281.png';
import { ContainerBanner, ContentText } from "../../components/banner.style/style.banner";
import { CgAdd } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { UseContext } from "../../context/context";
import { ContainerINC, ContainerPIA, ContainerProd, ContentINC, ContentPIA, ContentProd, Info } from "../../components/products/style.products";

const products = [
    {
        imag:CA10196,
        nome:"Arranhador Boston",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:40)x(A:60)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 30Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10196",
        a1:"1x arranhador Boston",
        preco:141.09,   
    },
    {
        imag:CA10225,
        nome:"Arranhador Topázio",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:41)x(A:58)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10225",
        a1:"1x arranhador Topázio",
        preco:123.84,   
    },
    
    {
        imag:BR10281,
        nome: "Varinha Borboleta",
        ref:"Código: 10281",
        a1:"1x Varinha borboleta",
        preco: 8.90,
    },

    {
        imag:CA10219,
       nome:"Arranhador Vênus",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:30)x(L:30)x(A:50)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10219",
        a1:"1x arranhador Vênus",
        preco:89.51,   
    },
    {
        imag:BR10176,
        nome: "Varinha Ping Penas",
        ref:"Código: 10176",
        a1:"1x Varinha ping penas",
        preco: 5.90,
    },
  
  ]


function Home () {

    const { adicionarItem, formatarMoeda, setOpenMenu, info, setInfo  } = useContext(UseContext);

    const newProducts = products.map((it) => {
        return {
            ...it, preco: (it.preco * 0.15 + it.preco).toFixed(2),
            precoPix: ((it.preco * 0.15 + it.preco) - (it.preco *  0.15 + it.preco) * 0.05).toFixed(2)
        }
        
    })


    return (
       <HomeContainer>
            <ContainerBanner>
                <ContentText>
                    <span>Fabrica Pet Câes & Gatos</span>
                </ContentText>
            </ContainerBanner>
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
                            <ContainerPIA info={info}>
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
            <Barra>
                <Button  onClick={()=>setOpenMenu(true)}>Ver Mais Produtos</Button>
            </Barra>
       </HomeContainer>
    )
}

export default Home;