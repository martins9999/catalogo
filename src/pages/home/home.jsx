import { Barra, Button, Container, Content, HomeContainer} from "./style.home";
import CA10230 from '../../assets/casas-arranhadores/10230.png';
import KitHappyCat from '../../assets/brinquedos-acessorios/kitHappyCat.png';
import Uz42 from '../../assets/brinquedos-acessorios/Uz42.png';
import V10284 from '../../assets/brinquedos-acessorios/v-10284.jpg';
import { ContainerBanner, ContentText } from "../../components/banner.style/style.banner";
import { ButtonsProd } from "../../components/products/style.products";
import { CgAdd } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { UseContext } from "../../context/context";

const products = [
    {
        imagem:Uz42,
        nome: "Varinha Bolinha de guizo com Pelúcia",
        id:10217,
        preco: 7.54,
    },
    {
        imagem:V10284,
        nome: "Varinha Bolinha de guizo com Pelúcia",
        id:10217,
        preco: 7.54,
    },
    {
        imagem:CA10230,
        nome: "Varinha Bolinha de guizo",
        id:10218,
        preco: 12.97,
    },
    {
        imagem:KitHappyCat,
        nome: "guizo com Pelúcia",
        id:10219,
        preco: 5.22,
    },
  
  ]


function Home () {

    const { adicionarItem, formatarMoeda, setOpenMenu  } = useContext(UseContext);


    return (
       <HomeContainer>
            <ContainerBanner>
                <ContentText>
                    <span>Fabrica Pet Câes & Gatos</span>
                </ContentText>
            </ContainerBanner>
            <Container>
                {products.map((it)=>(
                    <Content>
                        <img alt="" src={it.imagem}  />
                        <b>{it.nome}</b>
                        <ButtonsProd>
                            <b>Á Vista por <preco> { formatarMoeda(it.preco)} </preco> + valor do frete</b>
                            <button onClick={() => adicionarItem(it.id, products)}><CgAdd/><BsCart4/></button>
                        </ButtonsProd>
                    </Content>
                ))}
            </Container>
            <Barra>
                <Button  onClick={()=>setOpenMenu(true)}>Ver Mais Produtos</Button>
            </Barra>
       </HomeContainer>
    )
}

export default Home;