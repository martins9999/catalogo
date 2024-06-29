import styled from "styled-components";



export const ContainerBanner = styled.div`
    font-style: italic;
    margin-top: 50px;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 50px;
    font-weight: 600;
    background-color: rgb(50,80,200);
    color: greenyellow;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    height: 50px;
    padding: 10px 0;
    font-size: 22px;
}
`;
export const ContentText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {

}
`;
