import { Barra, Button, HomeContainer} from "./style.home";
import CA10202 from '../../assets/casas-arranhadores/10202.png';
import CA10198 from '../../assets/casas-arranhadores/10198.png';
import CA10193 from '../../assets/casas-arranhadores/10193.png';
import { ContainerBanner, ContentText } from "../../components/banner.style/style.banner";
import { CgAdd } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { UseContext } from "../../context/context";
import { ContainerINC, ContainerPIA, ContainerProd, ContentINC, ContentPIA, ContentProd, Img, Info } from "../../components/products/style.products";

const products = [
    {
        imag:CA10202,
        nome:"Arranhador Londres",
        material:"Material: MDF,pelúcia e sisal",
        c:"120",l:"50",a:"180",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"35cm",
        diametroI:"Diâmetro da toquinha: ", dmI:"40cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10202",
        a1:"1x arranhador Londres",
        preco:1015.85,   
    },
    {
        imag:CA10198,
        nome:"Arranhador Patinhas",
        material:"Material: MDF,pelúcia e sisal",
        c:"40",l:"40",a:"50",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"Não Possui",
        diametroI:"Diâmetro da cama suspensa: ", dmI:"40cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10198",
        a1:"1x arranhador Patinhas",
        preco:73.30,   
    },
    {
        imag:CA10193,
        nome:"Arranhador Atalanta",
        material:"Material: MDF,pelúcia e sisal",
        c:"41",l:"70",a:"112",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10193",
        a1:"1x arranhador Atalanta",
        preco:79.13,   
    },
  
  ]


function Home () {

    const { adicionarItem, formatarMoeda, setOpenMenu, info, setInfo  } = useContext(UseContext);

    const newProducts = products.map((it) => {
        return {...it, preco: (it.preco * 0.15 + it.preco).toFixed(2)}
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
                        <Img display={info}>
                            <img alt="" src={it.imag} />
                        </Img>
                        <ContainerINC display={info}>
                            <img alt="" src={it.imag} />
                            <ContentINC>
                                <b>{it.nome}</b>
                                <b>Código: {it.ref}</b>
                            </ContentINC>
                        </ContainerINC>
                        <Info height="80%" display={info}>
                            <span>{it.material}</span>
                            <span>
                                Medidas: C-{it.c} x L-{it.l} x A-{it.a} (cm)
                            </span>
                            <span>{it.diametroE}{it.dmE}</span>
                            <span>{it.diametroI}{it.dmI}</span>
                            <span>Recomendado: {it.recomendado}</span>
                            <span>{it.a1} {it.a2}</span>
                        </Info>
                        <ContainerPIA>
                            <b>Á Vista por <preco> { formatarMoeda(it.preco * 1) } </preco><frete> + valor do frete</frete></b>
                            <ContentPIA>
                                <button1 onClick={()=>setInfo(!info)}>{info ? 'Ver Foto' : 'Informações'}</button1>
                                <button2 onClick={() => adicionarItem(it.ref, newProducts)}><CgAdd /><BsCart4 /></button2>
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