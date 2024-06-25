import styled from "styled-components";

export const ContainerProd = styled.div`
    margin-top: 50px;
    width: 97%;
    display: grid;
    background-color: #fff;
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
    width: 100%;
    height: ${props => props.height};
    box-sizing: border-box;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: .5s;
    border: rgb(90,140,90) .5px solid;
&:hover {
    background-color: rgb(240,240,240);
}

> img {
    width: 100%;
    height: ${props => props.heightImg};
    border-radius: 10px;
    padding: 7px;
    box-sizing: border-box;
}
`;
export const TextProd = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    padding-left: 7px;
    gap: 5px;

 >span {
    color: rgb(100,100,100);
    font-size: 12px;
    font-weight: 600;
> tt {
    color: #000;
    font-size: 13px;
    font-weight: 600;
}
 }
>b {
    font-size: 16px;
    color: #000; 
}

`;
export const ButtonsProd = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: blue;
    border-radius: 10px;

 > button {
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
   > svg {
        width: 17px;
        height: 17px;
   }
 }
>b {
    font-size: 16px;
    color: rgb(90,90,90);
 preco {
    color: green;
 }
 
}
`;