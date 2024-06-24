import styled from "styled-components";

export const ContainerShoppingCart = styled.div`
    position: absolute;
    top: 50px;
    width: 100%;
    left: ${ props => props.onOff ? '0' : '-100%'};
    height: calc(100vh - 50px);
    background-color: rgb(0,0,0,.5);
`;

export const ContentShoppingCart = styled.div`
    position: absolute;
    width: 300px;
    height: calc(100vh - 50px);
    left: ${ props => props.onOff ? '0' : '-100%'};
    background-color: rgb(50,80,200);
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    >vazio {
        font-size: 100px;
        width: 100%;
        height: calc(100vh - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    >button {
        background-color: red;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 17px;
        border: none;
        width: 150px;
        margin-left: 65px;
        border-radius: 8px;
    }

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {

}
`;
export const ContentItemsShoppinCart = styled.div`
    width: 100%;
    height: 90px;
    box-sizing: border-box;
    background-color: rgb(250,250,220);
    color: rgb(50,50,100);
    display: flex;
    gap: 5px;
    border-radius: 10px;
    transition: .5s;

> img {
    width: 30%;
    height: 100%;
    border-radius: 10px;
    padding: 7px;
    box-sizing: border-box;
}
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 100%;
>img {
    width: 35%;
}
 }
`;
export const TextShoppinCart = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

>span {
    padding-left: 10px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    >i {
        background-color: red;
        color: #fff;
        padding: 1.5px 6px;
        border-radius: 50%;
    }
    >svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
        color: red;
    }
}
>b {
    padding-left: 10px;
    font-size: 16px;


}

`;
export const ButtonsShoppingCart = styled.div`
    width: 100%;
    height: 16%;

> button {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 2px 8px;
    background-color: red;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
}
`;