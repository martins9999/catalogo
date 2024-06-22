import { Barra, Button, Container, Content, HomeContainer} from "./style.home";
import Banner1 from '../../assets/imgApp/banner5.jpg';
import Banner2 from '../../assets/imgApp/banner6.jpg';
import Cartoes from '../../assets/imgApp/cartoes.png';
import CA10230 from '../../assets/casas-arranhadores/c-a-10230.jpg';
import KitHappyCat from '../../assets/brinquedos-acessorios/kitHappyCat.png';
import Uz42 from '../../assets/brinquedos-acessorios/Uz42.png';
import v10284 from '../../assets/brinquedos-acessorios/v-10284.jpg';
import { ContainerBanner, ContentImg, ContentText, Span } from "../../components/banner.style/style.banner";
import { useState } from "react";


function Home ({setOpenMenu}) {


    return (
       <HomeContainer>
            <ContainerBanner>
                <ContentImg dsp="none">     
                    <img alt="" src={Banner1} />
                </ContentImg>
                <ContentText>
                    <Span>PRODUTOS PARA</Span>
                    <Span>CÃES & GATOS</Span>
                </ContentText>
                <ContentImg>
                    <img alt="" src={Banner2} />
                </ContentImg>
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
            <Barra BG="rgb(190,190,190)">


            </Barra>
            <Container>
                <Content>
                    <img alt="" src={Cartoes} />
                </Content>
            </Container>
       </HomeContainer>
    )
}

export default Home;