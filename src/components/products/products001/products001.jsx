import CA10230 from '../../../assets/casas-arranhadores/c-a-10230.jpg';
import CA10214 from '../../../assets/casas-arranhadores/c-a-10214.jpg';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { PiShoppingCart } from 'react-icons/pi';
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';



const products = [
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10230,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
    {
        imagem:CA10214,
        title: 'ARRANHADOR BARRIL',
        material:'MDF, pelúcia, sisal e manta de juta',
        de:'Diãmetro dos orificios exteriores: 18cm ',
        di:'Diãmetro do orificio circular do interior: 18cm ',
        medidas:'Medidas: '+(''),
        id:102183,
        price: 191.55,
    },
]

function Products001 () {

    const { adicionarItem } = useContext(UseContext);

    return (
        <ContainerProd>
            {
                products.map(item => (
                <ContentProd height="430px" heightImg="49%">
                    <img alt="" src={item.imagem} />
                    <TextProd height="46%">
                        <b>{item.title}</b>
                        <spam>{item.material}</spam>
                        <spam>{item.de}</spam>
                        <spam>{item.di}</spam>
                        <spam>{item.medidas}</spam>
                        <spam>{item.id}</spam>
                        <b>R$ { ((((item.price) * (0.15) + (item.price)).toFixed(2)))}</b>
                    </TextProd>
                    <ButtonsProd>
                        <button onClick={() => adicionarItem(item.id, products)}>ADICIONAR<PiShoppingCart /></button>
                    </ButtonsProd>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
}
export default Products001;