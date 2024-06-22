
import Banner1 from '../../../assets/imgApp/banner3.jpg';
import Banner2 from '../../../assets/imgApp/banner4.jpg';
import { ContainerBanner, ContentImg, ContentText, Span } from "../../../components/banner.style/style.banner";
import { ContainerStore, PageStorie } from "../style.store";
import Products001 from "../../../components/products/products001/products001";


function Store001 () {
    return (
        <PageStorie>
            <ContainerStore>
                <ContainerBanner>
                    <ContentImg dsp="none">
                        <img alt="" src={Banner1} />
                    </ContentImg>
                    <ContentText>
                        <Span>CASAS</Span>
                        <Span>&</Span> 
                        <Span>ARRANHADORES</Span>
                    </ContentText>
                    <ContentImg>
                        <img alt="" src={Banner2} />
                    </ContentImg>     
                </ContainerBanner>
                <Products001 />
            </ContainerStore>
        </PageStorie>
    )
}

export default Store001;