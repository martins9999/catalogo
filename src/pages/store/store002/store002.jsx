import { ContainerStore, PageStorie } from "../style.store";
import Products002 from "../../../components/products/products002/products002";
import { ContainerBanner, ContentText,} from "../../../components/banner.style/style.banner";


function Store002 () {
    return (
        <PageStorie>
            <ContainerStore>
                <ContainerBanner>   
                    <ContentText>
                        <span>Produtos Diversos</span>
                    </ContentText>
                </ContainerBanner>
                <Products002/>
            </ContainerStore>
        </PageStorie>
    )
}

export default Store002;