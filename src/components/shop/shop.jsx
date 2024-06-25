import { useContext } from "react";
import { UseContext } from "../../context/context";
import { ContainerShoppingCart, ContentItemsShoppinCart, ContentShoppingCart, TextShoppinCart, Total } from "./style.shop";
import { CgAdd, CgRemove } from "react-icons/cg";
import { BsCartX } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";


const Shop = ({onOff}) => {
    const { shoppingCart, adicionarItem, removerItem, emptyCart, formatarMoeda, limparCarrinho, qttItemsShop} = useContext(UseContext);

    const totalValor = shoppingCart.reduce((acc, item) => 
        item.quantity * item.product.preco + acc, 0
)

    
    return (
        <>
        <ContainerShoppingCart onOff={onOff}>
            <ContentShoppingCart onOff={onOff}>
                {
                    shoppingCart.map((item) => (
                    <ContentItemsShoppinCart>
                        <img alt="" src={item.product.imag}  />
                        <TextShoppinCart>
                            <b>{item.product.nome}</b>
                            <span>Código: <codigo>{item.product.ref}</codigo></span>
                            <span>Preço da unidade: <preco>{formatarMoeda(item.product.preco * 1)} </preco></span>
                            <span>Quantidade: 
                                <CgRemove onClick={() => removerItem(item.product.ref)}/>
                                <i>{item.quantity}</i>
                                <CgAdd onClick={() => adicionarItem(item.product.ref, shoppingCart)}/>
                            </span>
                            <b>Total:<preco> {formatarMoeda(item.quantity * item.product.preco)} </preco></b>
                        </TextShoppinCart>
                    </ContentItemsShoppinCart>
                    ))
                }
                {emptyCart ? '' : <vazio><BsCartX /></vazio>}
            </ContentShoppingCart>
            { emptyCart ?
                <Total onOff={onOff}> 
                    <span>Total do Carrinho</span>  
                    <span><b>{qttItemsShop}</b> Produtos</span>  
                    <span>Valor Á Vista <b>{formatarMoeda(totalValor)}</b> + frete</span>  
                    <button onClick={()=>{limparCarrinho()}}>Limpar <RiDeleteBinLine/><BsCartX/></button>   
                </Total>
            :''}
        </ContainerShoppingCart>
            </>
    )

}
export default Shop;