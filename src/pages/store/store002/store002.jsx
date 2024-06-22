import { ContainerStore, PageStorie } from "../style.store";
import Products002 from "../../../components/products/products002/products002";
import { ContainerBanner, ContentImg2, ContentText, Span } from "../../../components/banner.style/style.banner";


function Store002 () {
    return (
        <PageStorie>
            <ContainerStore>
                <ContainerBanner>
                    <ContentText>
                        <Span>Brinquedos,</Span>
                        <Span>Coleiras,</Span> 
                        <Span>Shampoos e</Span>
                        <Span>muito mais</Span>
                    </ContentText>
                    <ContentImg2 />    
                </ContainerBanner>
                <Products002/>
            </ContainerStore>
        </PageStorie>
    )
}

export default Store002;