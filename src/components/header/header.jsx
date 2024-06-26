import { LuMenu } from "react-icons/lu";
import { ButtonContainer, HeaderH, Item, Items, List, ShoppingCartSvg } from "./style.header";
import { useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { useContext } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { UseContext } from "../../context/context";
import Shop from "../shop/shop";


function Header () {

    
    const items = [
        { name:'Ínicio', link:'/' },
        { name:'Casinhas e Arranhadores', link:'/vendas1' },
        { name:'Produtos Diversos', link:'/vendas2' },
    ]
    const { openMenu, setOpenMenu, openShoppingCart, setOpenShoppingCart, qttItemsShop, emptyCart} = useContext(UseContext);

    const navigate = useNavigate();
    



    return (
        <>
            <HeaderH>
                { openShoppingCart ?
                    '':
                    openMenu ?
                            <ButtonContainer onClick={ ()=> setOpenMenu(false) }><GoX /></ButtonContainer>
                        :
                            <ButtonContainer onClick={ ()=> setOpenMenu(true) }><LuMenu /></ButtonContainer>

                }
                
                <List onOff={openMenu}  onClick={()=>setOpenMenu(false)}>
                    <Items  onOff={openMenu}>
                        {items.map((item) => (
                            <Item onClick={()=> navigate( item.link )}>
                                <span>{ item.name }</span>
                                <svg>
                                    <path d="M-5 14 L8 7 L0 3" ></path>
                                </svg>
                            </Item>
                        ))}
                    </Items>
                </List>
                <Shop onOff={openShoppingCart}/>

                <ShoppingCartSvg>
                    {openMenu ?
                        '':
                        openShoppingCart ?
                            <GoX onClick={ ()=> setOpenShoppingCart(false) }/>
                        :
                        <>
                            <PiShoppingCart onClick={ ()=> setOpenShoppingCart(true) }/>
                            {emptyCart ?
                            <span>{qttItemsShop}</span>
                            :''}
                        </>
                        }
                </ShoppingCartSvg>
            </HeaderH> 
        </>
    )
}

export default Header;