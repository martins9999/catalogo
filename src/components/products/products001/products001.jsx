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
]

function Products001 () {

    const { shoppingCart, setShoppingCart, adicionarItem, removerItem } = useContext(UseContext);

    return (
        <ContainerProd>
            {
                products.map(item => (
                <ContentProd>
                    <img alt="" src={item.imagem}  />
                    <TextProd>
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
                        <section>
                            {shoppingCart.map((item) => (
                                <>
                                    <i>Qtd {item.quantity}</i>
                                    <span>Total: R$ {(item.quantity * (item.product.price * 0.15 + item.product.price) ).toFixed(2)}</span>
                                </>
                            ))}
                        </section>
                    </ButtonsProd>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
    {/* </ProductContainer>
        <ProductContainer>
            {items.map((item) => (
                <ProductContent>
                    <img alt="" src={item.image}  />
                    <b>{item.nome}</b>
                    <span>Medidas: {item.c}x{item.l}x{item.a}cm (C x L x A)</span>
                    <span>Recomendado: {item.recomendado}</span>
                    <span>Código: {item.codigo}</span>
                    <b>à Vista <b style={{color:'blue'}}>R$ {((item.preco * 0.15 + item.preco).toFixed(2))}</b>  + Taxa de entrega</b>
                    <b style={{color:'red'}} onClick={() => setCalc(true)}>Consultar valor à prazo</b>
                </ProductContent>
            ))}
        </ProductContainer> */}
}
export default Products001;