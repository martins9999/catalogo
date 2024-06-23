import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseStorage = ({children}) => {
   const [shoppingCart, setShoppingCart] = useState([])

   const adicionarItem = (id, products) => {
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
                    console.log(adicionando);
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
    const alreadyInShoppingCart = shoppingCart.find(
        (item) => item.product.id === id
    );
    if (alreadyInShoppingCart && alreadyInShoppingCart?.quantity > 1) {
        const newShoppingCart = shoppingCart.map((item) => {
            if(item.product.id === id)
                {
                    
                    const removendo = {...item, quantity: item.quantity --}
                    console.log(removendo);
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


return (
    <UseContext.Provider value={{
        shoppingCart,
        setShoppingCart,
        adicionarItem,
        removerItem,
    }}>
        {children}
    </UseContext.Provider>
)
}