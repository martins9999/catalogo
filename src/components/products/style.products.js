import styled from "styled-components";

export const ContainerProd = styled.div`
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 30px;
    column-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

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
    height: 430px;
    box-sizing: border-box;
    background-color: rgb(240,240,240);
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 10px;
    transition: .5s;
    border: .5px solid #000;

> img {
    width: 100%;
    height: 46%;
    border-radius: 10px;
    padding: 7px;
    box-sizing: border-box;
}

`;
export const TextProd = styled.div`
    width: 100%;
    height: 46%;
    display: flex;
    flex-direction: column;
    padding-left: 7px;
    gap: 5px;

>span {
    font-size: 11px;
    font-weight: 500;
}
>b {
    font-size: 14.5px;
    color: blue;
}

`;
export const ButtonsProd = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(220,220,220);
    color: blue;
    border-radius: 10px;

 > button {
    cursor: pointer;
    border: 1px solid red;
    border-radius: 8px;
    padding: 2px 10px;
    background-color: rgb(240,240,240);
    color: red;
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
 > section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
}
`;