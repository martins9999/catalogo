import styled from "styled-components";

export const ContainerProd = styled.div`
    margin-top: 50px;
    width: 97%;
    display: grid;
    background-color: rgb(240,240,240);
    grid-template-columns: repeat(5, 1fr);
    row-gap: 30px;
    column-gap: 20px;
    padding: 20px;
    box-sizing: border-box;

@media only screen and (min-device-width : 769px) and (max-device-width : 1366px) {
    grid-template-columns: repeat(4, 1fr);
}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}
`;
export const ContentProd = styled.div`
    border-radius: 10px;
    width: 100%;
    height: ${props => props.height};
    box-sizing: border-box;
    background-color: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: .5s;
    border: rgb(90,140,90) .5px solid;
&:hover {
}

> img {
    width: 100%;
    height: ${props => props.heightImg ? '25%' : '73.5%'};
    border-radius: 10px;
    box-sizing: border-box;
}
`;
export const ContainerINC = styled.div`
    font-size: 15px;
    width: 100%;
    height: 14%;
    padding-left: 7px;
    padding-top: 7px;
    box-sizing: border-box;
    display: flex;
    gap: 7px;
    >img {
        display: ${props => props.display ? 'flex' : 'none'};
        width: 17%;
        height: 100%;
    }

`;
export const ContentINC = styled.div`
    display: flex;
    flex-direction: column;

`;
export const Info = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    padding-left: 7px;

    >span {
        font-size: 13.5px;
        font-weight: 600;
    }

`;
export const ContainerPIA = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: blue;
    border-radius: 10px;
>b {
    font-size: 14px;
 preco {
    color: green;
 }
 
}
`;
export const ContentPIA = styled.div`
    padding-left: 7px;
    display: flex;
    gap: 10px;
    > button2 {
        cursor: pointer;
        border: none;
        border-radius: 8px;
        padding: 2px 10px;
        background-color: green;
        color: #fff;
        font-size: 14px;
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        gap: 10px;
        >svg {
                width: 17px;
                height: 17px;
        }
    }
> button1 {
    background-color: blue;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 2px 0;
    border-radius: 7px;
    color: #fff;
    cursor: pointer;
}
> b {
    font-size: 15px;
}
`;
export const Img = styled.div`
    width: 100%;
    height: 70%;
    display: ${props => props.display ? 'none' : 'flex'};
    > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 7px;
        box-sizing: border-box;
    }
`;