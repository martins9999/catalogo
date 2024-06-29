import { useContext } from "react";
import { UseContext } from "../../context/context";
import { ContainerShoppingCart, ContentItemsShoppinCart, ContentShoppingCart, TextShoppinCart, Total } from "./style.shop";
import { CgAdd, CgRemove } from "react-icons/cg";
import { BsCartX } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";


const Shop = ({onOff}) => {
    const { shoppingCart, adicionarItem, removerItem, emptyCart, formatarMoeda, limparCarrinho, qttItemsShop} = useContext(UseContext);

    const totalValor = shoppingCart.reduce((acc, it) => 
        it.quantity * it.product.preco + acc, 0
    )
    const precoPix = shoppingCart.reduce((acc, it) => 
        (it.quantity * it.product.preco - (it.quantity * it.product.preco * 0.05).toFixed(2) + acc) , 0
    )


    
    return (
        <>
        <ContainerShoppingCart onOff={onOff}>
            <ContentShoppingCart onOff={onOff} emptyCart={emptyCart}>
                {
                    shoppingCart.map((item) => (
                    <ContentItemsShoppinCart>
                        <img alt="" src={item.product.imag}  />
                        <TextShoppinCart>
                            <b>{item.product.nome}</b>
                            <span><codigo>{item.product.ref}</codigo></span>
                            <span>Preço da unidade: <preco>{formatarMoeda(item.product.preco * 1)} </preco></span>
                            <span>Quantidade: 
                                <CgRemove onClick={() => removerItem(item.product.ref)}/>
                                <spann>{item.quantity}</spann>
                                <CgAdd onClick={() => adicionarItem(item.product.ref, shoppingCart)}/>
                            </span>
                            <b>Total:<preco> {formatarMoeda(item.quantity * item.product.preco)} </preco></b>
                        </TextShoppinCart>
                    </ContentItemsShoppinCart>
                    ))
                }
                {emptyCart ? '' : <vazio>Sem Produtos <BsCartX /></vazio>}
            </ContentShoppingCart>
            { emptyCart ?
                <Total onOff={onOff}> 
                    <span>Total do Carrinho</span>  
                    <span><b>{qttItemsShop}</b> Produtos</span>
                    <span>À Vista <b>{ formatarMoeda(totalValor) }</b> + valor do frete</span>
                    <span> No Pix <b>{formatarMoeda(precoPix)}</b> + valor do frete</span> 
                    <button onClick={()=>{limparCarrinho()}}>Limpar <RiDeleteBinLine/><BsCartX/></button>   
                </Total>
            :''}
        </ContainerShoppingCart>
            </>
    )

}
export default Shop;