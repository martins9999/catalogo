import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#87ceeb, #e0f6ff);
    font-style: italic;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
export const Banner = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 350px;
    background-color: rgb(220,230,240);
`;
export const Container = styled.div`
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
export const Content = styled.div`
    width: 100%;
    height: 300px;
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
    height: 70%;
    border-radius: 10px;
    padding: 7px;
    box-sizing: border-box;
}
>b {
    margin-left: 5px;
}
`;
export const Barra = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    background-color: ${p => p.BG};
`;
export const Button = styled.div`
    margin: 10px 0;
    padding: 8px 15px;
    background-color: red;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
&:hover {
    background-color: blue;
}
`;