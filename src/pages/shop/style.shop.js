import styled from "styled-components";

export const ContainerShoppingCart = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {

}
`;
export const ContentShoppinCart = styled.div`
    width: 25%;
    height: 140px;
    box-sizing: border-box;
    background-color: rgb(220,220,220);
    color: rgb(50,50,100);
    display: flex;
    gap: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: .5s;
&:hover{
    background-color: rgb(240,240,240);
    color: #000;
}

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
>i {
    background-color: red;
    color: #fff;
    padding: 1.5px 6px;
    border-radius: 50%;
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