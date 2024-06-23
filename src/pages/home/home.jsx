import { Barra, Button, Container, Content, HomeContainer} from "./style.home";
import CA10230 from '../../assets/casas-arranhadores/c-a-10230.jpg';
import KitHappyCat from '../../assets/brinquedos-acessorios/kitHappyCat.png';
import Uz42 from '../../assets/brinquedos-acessorios/Uz42.png';
import v10284 from '../../assets/brinquedos-acessorios/v-10284.jpg';
import { ContainerBanner, ContentImg, ContentText, Span } from "../../components/banner.style/style.banner";


function Home ({setOpenMenu}) {


    return (
       <HomeContainer>
            <ContainerBanner>
                <ContentText>
                    <Span>Fabrica Pet</Span>
                    <Span>Câes & Gatos</Span>
                </ContentText>
                <ContentImg anim="img3 " />
            </ContainerBanner>
            <Container>
                <Content scale="scale(1.05)" cursor="pointer">
                    <img alt="" src={CA10230} />
                    <span>ARRANHADOR BARIRL R$ 220,80 </span>
                </Content>
                <Content scale="scale(1.05)" cursor="pointer">
                    <img alt="" src={KitHappyCat} />
                    <span>KIT HAPPY CAT R$ 18,40 </span>
                </Content>
                <Content scale="scale(1.05)" cursor="pointer">
                    <img alt="" src={Uz42} />
                    <span>GRAMINHA PARA CÃES R$ 10,35 </span>
                </Content>
                <Content scale="scale(1.05)" cursor="pointer">
                    <img alt="" src={v10284} />
                    <span>VARINHA COM RATINHO + PENAS R$ 10,35 </span>
                </Content>
            </Container>
            <Barra>
                <Button  onClick={()=>setOpenMenu(true)}>Ver Mais Produtos</Button>
            </Barra>
            {/* <Barra BG="rgb(190,190,190)">


            </Barra>
            <Container>
                <Content>
                    <img alt="" src={Cartoes} />
                </Content>
            </Container> */}
       </HomeContainer>
    )
}

export default Home;