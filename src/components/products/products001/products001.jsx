import CA10230 from '../../../assets/casas-arranhadores/c-a-10230.jpg';
import CA10214 from '../../../assets/casas-arranhadores/c-a-10214.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { PiShoppingCart } from 'react-icons/pi';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';



const products = [
    {
        imagem:CA10230,
        title: 'Arranhador barril',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'18',
        di:'18',
        medidas:'45',
        id:102183,
        preco: 191.19,
    },
    {
        imagem:CA10230,
        title: 'Arranhador',
        material:'MDF, pelúcia, sisal',
        de:'18',
        di:'18',
        medidas:'45',
        id:102184,
        preco: 300.21,
    },
    {
        imagem:CA10230,
        title: 'barril',
        material:' sisal e manta de juta',
        de:'18',
        di:'18',
        medidas:'45',
        id:102185,
        preco: 230.75,
    },
]

function Products001 () {

    const { adicionarItem, formatarMoeda } = useContext(UseContext);

    return (
        <ContainerProd>
            {
                products.map(item => (
                <ContentProd height="380px" heightImg="47%">
                    <img alt="" src={item.imagem} />
                    <TextProd height="33%">
                        <b>{item.title}</b>
                        <span>Material: <tt>{item.material}</tt></span>
                        <span>Diâmetro dos orificios exteriores: <tt>{item.de}cm</tt></span>
                        <span>Diâmetro do orificio circular do interior: <tt>{item.di}cm</tt></span>
                        <span>Medidas: <tt>{item.medidas}cm</tt></span>
                        <span>Código: <tt>{item.id}</tt></span>
                    </TextProd>
                    <ButtonsProd>
                        <b>Á Vista por <preco> {formatarMoeda(item.preco)} </preco>  <frete>+ valor do frete</frete></b>
                        <button onClick={() => adicionarItem(item.id, products)}>Adicionar<PiShoppingCart /></button>
                    </ButtonsProd>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
}
export default Products001;