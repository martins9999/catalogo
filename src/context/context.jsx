import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseStorage = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openShoppingCart, setOpenShoppingCart] = useState(false)
    //const [calc, setCalc] = useState(false)
   const [shoppingCart, setShoppingCart] = useState([])
   const [qttItemsShop, setQttItemsShop] = useState()
   const [emptyCart, setEmptyCart] = useState(false)
   const [info, setInfo] = useState(false)
   console.log(qttItemsShop)

   const formatarMoeda = (valor) =>{
        return valor.toLocaleString('pt-br', {
            style: 'currency', currency:'BRL'
        })
   }

   const adicionarItem = (ref, products) => {
    setQttItemsShop(1)
    setEmptyCart(true)
    if(qttItemsShop >= 1) {
        setQttItemsShop(qttItemsShop + 1)
    }
    const item = products.find(
        (item) => item.ref === ref
    );

    const alreadyInShoppingCart = shoppingCart.find(
        (item) => item.product.ref === ref
    );


    if (alreadyInShoppingCart) {
        const newShoppingCart = shoppingCart.map((item) => {    
                if(item.product.ref === ref)
                {
                    const adicionando =  {...item, quantity: item.quantity ++}
                    console.log(adicionando)
                    
                }
            return item
        })
        setShoppingCart(newShoppingCart)
        return
    }
    const productItem = {
        product: item,
        quantity: 1
    }
    const newShoppingCart = [...shoppingCart, productItem]
    setShoppingCart(newShoppingCart)
}

const removerItem = (ref) => {
    if(qttItemsShop >= 1) {
        setQttItemsShop(qttItemsShop - 1)
        if(qttItemsShop <= 1) {
            setEmptyCart(false)
        }
    }
    const alreadyInShoppingCart = shoppingCart.find(
        (item) => item.product.ref === ref
    );
    if (alreadyInShoppingCart && alreadyInShoppingCart?.quantity > 1) {
        const newShoppingCart = shoppingCart.map((item) => {
            if(item.product.ref === ref)
                {
                    
                    const removendo = {...item, quantity: item.quantity --}
                    console.log(removendo)
                    
                }
            return item
        })
        setShoppingCart(newShoppingCart)
        return
    }
    const newShoppingCart = shoppingCart.filter(
        (item) => item.product.ref !== ref
    )
    setShoppingCart(newShoppingCart)

}
const limparCarrinho = () => {
    setShoppingCart([])
    setQttItemsShop()
    setEmptyCart(false)

}

return (
    <UseContext.Provider value={{
        shoppingCart,
        setShoppingCart,
        openShoppingCart,
        setOpenShoppingCart,
        openMenu,
        setOpenMenu,
        adicionarItem,
        removerItem,
        limparCarrinho,
        formatarMoeda,
        emptyCart,
        qttItemsShop,
        info,
        setInfo
    }}>
        {children}
    </UseContext.Provider>
)
}