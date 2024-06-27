import styled from "styled-components";

export const ContainerShoppingCart = styled.div`
    position: fixed;
    top: 50px;
    width: 30%;
    height: calc(100vh - 50px);
    left: ${ props => props.onOff ? '0' : '-100%'};
    height: calc(100vh - 50px);
    background-color: rgb(0,0,0,.5);
    overflow-x: hidden;
    overflow-y: auto;
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 100%;
}
`;

export const ContentShoppingCart = styled.div`
    position: absolute;
    width: 100%;
    min-height: calc(100vh - 50px);
    left: ${ props => props.onOff ? '0' : '-100%'};
    background-color: rgb(250,255,250);
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    box-sizing: border-box;

    >vazio {
        font-size: 70px;
        font-weight: 900;
        width: 100%;
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: red;
        > svg {
            width: 150px;
            height: 150px;
        }
    }

    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        vazio {
            font-size: 50px;
        }
    }
`;
export const ContentItemsShoppinCart = styled.div`
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    border: rgb(90,140,90) .5px solid;
    color: rgb(50,50,100);
    display: flex;
    gap: 5px;
    transition: .5s;

> img {
    width: 20%;
    height: 100%;
    border-radius: 10px;
    padding: 7px;
    box-sizing: border-box;
}
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 100%;
 }
`;
export const TextShoppinCart = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

>span {
    color: rgb(100,100,100);
    font-size: 13px;
    font-weight: 600;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    > spann {
    background-color: red;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    >svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
        color: red;
    }
    >preco {
        color: green;
        font-size: 14px;
    }
    >codigo {
        color: #000;
    }
}
>b {
    padding-left: 10px;
    font-size: 15px;
    >preco {
        color: green;
    }

}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 80%;
}
`;
export const Total = styled.div`
    position: fixed;
    left: ${ props => props.onOff ? '0' : '-100%'};
    bottom: 0;
    width: 30%;
    padding: 8px 0;
    background-color: rgb(250,250,250);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    gap: 2px;
    color: #000;
    font-weight: 600;
    >span {
        >b {
            color: green;
        }
    }

    >button {
        margin-top: 8px;
        background-color: red;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        border: none;
        padding: 1px 8px;
        border-radius: 8px;
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        width: 96%;
        left: ${ props => props.onOff ? '2%' : '-100%'};
    }
`;