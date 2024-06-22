import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    flex-direction: column;
    gap: 20px;
}
`;
export const Content = styled.div`
    width: 20%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    padding: 7px;
    border: 1px solid #fff;
    background-color: rgb(220,220,220);
    border-radius: 10px;
    color: rgb(50,50,100);
    gap: 10px;
    transition: .5s;
    cursor: pointer;

&:hover{
    background-color: rgb(240,240,240);
    color: #000;
}
> img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 95%;
    font-size: 14px;
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
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
&:hover {
    background-color: blue;
}
`;