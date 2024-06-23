import { LuCircleEqual, LuDelete, LuMenu } from "react-icons/lu";
import { ButtonContainer, CalcContainer, CalcContent, ContentInput, HeaderH, Item, Items, List, ShoppingCartSvg, X } from "./style.header";
import { useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { useState } from "react";
import ImgCartoes from '../../assets/imgApp/cartoes.png';
import { PiShoppingCart } from "react-icons/pi";


function Header ({openMenu, setOpenMenu, setCalc, calc}) {

    const items = [
        { name:'Ínicio', link:'/' },
        { name:'Casas com (e) Arranhador', link:'/vendas1' },
        { name:'Variedades', link:'/vendas2' },
    ]

    const navigate = useNavigate();
    
    const [v1, setV1] = useState()
    const [v2, setV2] = useState()
    const [result1, setResult1] = useState('0,00')
    const [result2, setResult2] = useState('0,00')
    let taxa;
    let total;
    let parc
    function res () {
        if(v2 == 2) {
            taxa = v1 * 0.0526;
            total = + v1 + taxa ;
            parc = total / 2;    
            setResult1(total.toFixed(2));
            setResult2(parc.toFixed(2));
        }
        if(v2 == 3) {
            taxa = v1 * 0.0706
            total = + v1 + taxa ;
            parc = total / 3;    
            setResult1(total.toFixed(2));
            setResult2(parc.toFixed(2));
        }
        if(v2 == 4) {
            taxa = v1 * 0.08869
            total = + v1 + taxa ;
            parc = total / 4;    
            setResult1(total.toFixed(2));
            setResult2(parc.toFixed(2));
        }
        if(v2 == 5) {
            taxa = v1 * 0.107106
            total = + v1 + taxa ;
            parc = total / 5;    
            setResult1(total.toFixed(2));
            setResult2(parc.toFixed(2));
        }
    }

    const limpar = () => {
        setV1('')
        setV2('')
        setResult1('0,00');
        setResult2('0,00');
    }


    return (
        <>
            <CalcContainer calc={calc}>
                <CalcContent>
                    <p onClick={()=>setCalc(false)}><GoX /></p>
                    <img alt="" src={ImgCartoes} />
                    <ContentInput>
                        <label for="v1">VALOR R$</label>
                        <input id="v1" value={v1} onChange={(e)=>setV1(e.target.value)}/>
                    </ContentInput>
                    <ContentInput>
                        <label for="v2">QUANTIDADE</label>
                        <input for="v2" value={v2} onChange={(e)=>setV2(e.target.value)}/>
                    </ContentInput>
                    <ContentInput>
                        <button  onClick={() => limpar()}><LuDelete /></button>
                        <button  onClick={() => res(v1, v2)}><LuCircleEqual/></button>
                    </ContentInput>
                    <span>PARCELAS <X>{v2} x</X> <b> R$ {result2}</b></span>
                    <span>TOTAL A PRAZO <b> R$ {result1}</b></span>
                </CalcContent>
            </CalcContainer>
            <HeaderH>
                {openMenu ?
                    <ButtonContainer onClick={()=>setOpenMenu(false)}><GoX /></ButtonContainer>
                    :
                    <ButtonContainer onClick={()=>setOpenMenu(true)}><LuMenu /></ButtonContainer>
                }
                <List onOff={openMenu}  onClick={()=>setOpenMenu(false)}>
                    <Items  onOff={openMenu}>
                        {items.map((item) => (
                            <Item onClick={()=> navigate( item.link )}>
                                <span>{ item.name }</span>
                                <svg>
                                    <path d="M-5 14 L10 7.5 L0 3" ></path>
                                </svg>
                            </Item>
                        ))}
                    </Items>
                </List>
                <ShoppingCartSvg onClick={()=> navigate('/shop')}>
                    <PiShoppingCart />
                    {/* <span>1</span> */}
                </ShoppingCartSvg>
            </HeaderH> 
        </>
    )
}

export default Header;