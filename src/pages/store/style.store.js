import styled from "styled-components";


export const PageStorie = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#87ceeb, #e0f6ff);
`;
export const ContainerStore = styled.div`
    width: 100%;
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