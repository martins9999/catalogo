import { ContainerBanner, ContentImg, ContentText, Span } from "../../../components/banner.style/style.banner";
import { ContainerStore, PageStorie } from "../style.store";
import Products001 from "../../../components/products/products001/products001";


function Store001 () {
    return (
        <PageStorie>
            <ContainerStore>
                <ContainerBanner>
                    <ContentText>
                        <Span>CASAS</Span>
                        <Span>&</Span> 
                        <Span>ARRANHADORES</Span>
                    </ContentText>
                    <ContentImg />    
                </ContainerBanner>
                <Products001 />
            </ContainerStore>
        </PageStorie>
    )
}

export default Store001;