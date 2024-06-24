import { useContext } from "react";
import { ButtonsShoppingCart, ContainerShoppingCart, ContentShoppinCart, TextShoppinCart } from "./style.shop";
import { UseContext } from "../../context/context";
import { CgAdd, CgRemove } from "react-icons/cg";


const Shop = () => {
    const { shoppingCart, adicionarItem, removerItem,sho, formatarMoeda, limparCarrinho} = useContext(UseContext);

    const totalValor = shoppingCart.reduce((acc, item) => 
        item.quantity * item.product.preco + acc, 0
)

    
    return (
        <ContainerShoppingCart>
            {
                shoppingCart.map((item) => (
                <ContentShoppinCart>
                    <img alt="" src={item.product.imagem}  />
                    <TextShoppinCart>
                        <b>{item.product.nome}</b>
                        <span>Código: {item.product.id}</span>
                        <span>Preço da unidade: R$ {formatarMoeda(item.product.preco)}</span>
                        <span>Quantidade: 
                            <CgRemove onClick={() => removerItem(item.product.id)}/>
                            <i>{item.quantity}</i>
                            <CgAdd onClick={() => adicionarItem(item.product.id, shoppingCart)}/>
                        </span>
                        <ButtonsShoppingCart>
                        </ButtonsShoppingCart>
                        <b>Total: {formatarMoeda(item.quantity * item.product.preco)}</b>
                    </TextShoppinCart>
                </ContentShoppinCart>
                ))
            }
            { sho ?
            <>
            <b>{formatarMoeda(totalValor)}</b>
            <button onClick={()=>{limparCarrinho()}}>Limpar</button>
            </>
             : <vazio>Carrinho Vazio</vazio>}
        </ContainerShoppingCart>
    )

}
export default Shop;