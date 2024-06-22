import { useContext } from "react";
import { ButtonsShoppingCart, ContainerShoppingCart, ContentShoppinCart, TextShoppinCart } from "./style.shop";
import { UseContext } from "../../context/context";
import { PiTrashFill } from "react-icons/pi";

const Shop = () => {
    const { shoppingCart, setShoppingCart, adicionarItem, removerItem } = useContext(UseContext);

    
    return (
        <ContainerShoppingCart>
            {
                shoppingCart.map((item) => (
                <ContentShoppinCart>
                    <img alt="" src={item.product.imagem}  />
                    <TextShoppinCart>
                        <b>{item.product.title}</b>
                        <span>Código: {item.product.id}</span>
                        <span>Preço da unidade: R$ {(item.product.price * 0.15 + item.product.price).toFixed(2)}</span>
                        <span>Quantidade: <i>{item.quantity}</i></span>
                        <ButtonsShoppingCart>
                            <button onClick={() => removerItem(item.product.id)}>X<PiTrashFill/> </button>
                        </ButtonsShoppingCart>
                        <b>Total: R$ {(item.quantity * (item.product.price * 0.15 + item.product.price) ).toFixed(2)}</b>
                    </TextShoppinCart>
                </ContentShoppinCart>
                ))
            }
        </ContainerShoppingCart>
    )

}
export default Shop;