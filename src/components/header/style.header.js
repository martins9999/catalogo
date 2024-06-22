import styled from "styled-components";

export const HeaderH = styled.header`
    width: 100%;
    height: 50px;
    background-color: rgb(20,20,20);
    color: #fff;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ButtonContainer = styled.div`
    margin-left: 5px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(180,180,180);
    cursor: pointer;
&:hover {
    color: #fff;
}
> svg {
    width: 25px;
    height: 25px;
}
`;
export const List = styled.div`
    position: absolute;
    top: 50px;
    width: 100%;
    left: ${ props => props.onOff ? '0' : '-100%'};
    height: calc(100vh - 50px);
    background-color: rgb(0,0,0,.5);
    

`;
export const Items = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(20,20,20);
    
`;

export const Item = styled.div`
    padding: 2px 7px;
    margin-left: 10px;
    gap: 7px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: rgb(180,180,180);
    stroke: rgb(180,180,180);
    cursor: pointer;
&:hover {
    color: #fff;
    stroke: #fff;
}
> svg {
    fill: transparent;
    stroke-width: 1px;
    width: 14px;
    height: 14px;
}
`;
export const CalcContainer = styled.div`
    position: fixed;
    left: ${p => p.calc ? '0' : '-100%'};
    background-color: rgba(30,30,30,.7);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CalcContent = styled.div`
    position: absolute;
    background-color: rgb(20,20,20);
    width: 20%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
    gap: 5px;

> img {
    background-color: #fff;
    width: 45%;
    height: 35%;
}


> p {
    position: absolute;
    top: 5px;
    left: 15px;
    cursor: pointer;
    color: rgb(180,180,180);
&:hover{
    color: #fff;
}
> svg {
    width: 30px;
    height: 30px;
}
}


> span {
    width: 70%;
    background-color: #fff;
    padding: 4px 10px;
    color: #000;
    font-weight: 500;
    font-size: 17px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;

  > b {
      color: red;
   }
}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 95%;
    height: 50%;
}
`;
export const ContentInput = styled.div`
    width: 55%;
    font-weight: 600;
    background-color: rgb(90,90,90);
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    border-radius: 8px;
    
> input {
    width: 30%;
    text-align: center;
    font-size: 17px;
    border-radius: 8px;
    border: none;
}
> button {
    background-color: red;
    color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;
> svg {
    width: 20px;
    height: 20px;
}
}
`;
export const X = styled.div`
    width: 60px;
    color: red;
    display: flex;
    justify-content: flex-end;
`;
export const ShoppingCartSvg = styled.div`
    margin-right: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
> svg {
    width: 40px;
    height: 40px;
}
> span {
    background-color: red;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;