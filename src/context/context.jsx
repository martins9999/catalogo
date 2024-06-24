import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseStorage = ({children}) => {
   const [shoppingCart, setShoppingCart] = useState([])
   const [shop, setShop] = useState()
   const [sho, setSho] = useState(false)
   console.log(sho)
   console.log(shop)

   const formatarMoeda = (valor) =>{
        return valor.toLocaleString('pt-br', {
            style: 'currency', currency:'BRL'
        })
   }

   const adicionarItem = (id, products) => {
    setShop(1)
    setSho(true)
    if(shop >= 1) {
        setShop(shop + 1)
    }
    const item = products.find(
        (item) => item.id === id
    );

    const alreadyInShoppingCart = shoppingCart.find(
        (item) => item.product.id === id
    );


    if (alreadyInShoppingCart) {
        const newShoppingCart = shoppingCart.map((item) => {    
                if(item.product.id === id)
                {
                    const adicionando =  {...item, quantity: item.quantity ++}
                    
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

const removerItem = (id) => {
    if(shop >= 1) {
        setShop(shop - 1)
        if(shop <= 1) {
            setSho(false)
        }
    }
    const alreadyInShoppingCart = shoppingCart.find(
        (item) => item.product.id === id
    );
    if (alreadyInShoppingCart && alreadyInShoppingCart?.quantity > 1) {
        const newShoppingCart = shoppingCart.map((item) => {
            if(item.product.id === id)
                {
                    
                    const removendo = {...item, quantity: item.quantity --}
                    
                }
            return item
        })
        setShoppingCart(newShoppingCart)
        return
    }
    const newShoppingCart = shoppingCart.filter(
        (item) => item.product.id !== id
    )
    setShoppingCart(newShoppingCart)

}
const limparCarrinho = () => {
    setShoppingCart([])
    setShop()
    setSho(false)

}

return (
    <UseContext.Provider value={{
        shoppingCart,
        setShoppingCart,
        adicionarItem,
        removerItem,
        formatarMoeda,
        limparCarrinho,
        sho
    }}>
        {children}
    </UseContext.Provider>
)
}