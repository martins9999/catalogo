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
        imag:Uz42,
        nome: "",
        ref:10217,
        preco: '',
    },
    {
        imag:V10284,
        nome: "",
        ref:10217,
        preco: '',
    },
    {
        imag:CA10230,
        nome: "",
        ref:10218,
        preco: '',
    },
    {
        imag:KitHappyCat,
        nome: "",
        ref:10219,
        preco: '',
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
                        <img alt="" src={it.imag}  />
                        <b>{it.nome}</b>
                        <ButtonsProd>
                            <b>Á Vista por <preco> { formatarMoeda(it.preco)} </preco> + valor do frete</b>
                            <button onClick={() => adicionarItem(it.ref, products)}><CgAdd/><BsCart4/></button>
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