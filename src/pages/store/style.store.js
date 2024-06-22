import styled from "styled-components";


export const PageStorie = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
`;
export const ContainerStore = styled.div`
    width: 100%;
`;
export const ContainerBanner = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    font-weight: 600;
    background-color: rgb(220,230,240);
    color: #000;
    padding: 50px 0;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    height: 150px;
    padding: 10px 0;
    font-size: 30px;
}
`;
export const ContentText = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {

}
`;
export const ContentImg = styled.div`
    width: 25%;
    height: 100%;
> img {
    width: 100%;
    height: 100%;
}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    display: ${props => props.dsp};
    width: 50%;
}
`;