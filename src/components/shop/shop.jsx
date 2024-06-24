import { useContext } from "react";
import { UseContext } from "../../context/context";
import { ButtonsShoppingCart, ContainerShoppingCart, ContentItemsShoppinCart, ContentShoppingCart, TextShoppinCart } from "./style.shop";
import { CgAdd, CgRemove } from "react-icons/cg";
import { BsCartX } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";


const Shop = ({onOff, setOpenShoppingCart}) => {
    const { shoppingCart, adicionarItem, removerItem, emptyCart, formatarMoeda, limparCarrinho} = useContext(UseContext);

    const totalValor = shoppingCart.reduce((acc, item) => 
        item.quantity * item.product.preco + acc, 0
)

    
    return (
        <ContainerShoppingCart onOff={onOff} onClick={()=> setOpenShoppingCart()}>
            <ContentShoppingCart onOff={onOff}>
                {
                    shoppingCart.map((item) => (
                    <ContentItemsShoppinCart>
                        <img alt="" src={item.product.imagem}  />
                        <TextShoppinCart>
                            <b>{item.product.nome}</b>
                            <span>Código: {item.product.id}</span>
                            <span>Preço da unidade: {formatarMoeda(item.product.preco)}</span>
                            <span>Quantidade: 
                                <CgRemove onClick={() => removerItem(item.product.id)}/>
                                <i>{item.quantity}</i>
                                <CgAdd onClick={() => adicionarItem(item.product.id, shoppingCart)}/>
                            </span>
                            <ButtonsShoppingCart>
                            </ButtonsShoppingCart>
                            <b>Total: {formatarMoeda(item.quantity * item.product.preco)}</b>
                        </TextShoppinCart>
                    </ContentItemsShoppinCart>
                    ))
                }
                { emptyCart ?
                <>
                <b>{formatarMoeda(totalValor)}</b>
                <button onClick={()=>{limparCarrinho()}}>Limpar <RiDeleteBinLine/><BsCartX/></button>
                </>
                : <vazio><BsCartX /></vazio>}
            </ContentShoppingCart>
        </ContainerShoppingCart>
    )

}
export default Shop;