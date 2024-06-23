import styled from "styled-components";
import img1 from '../../assets/imgApp/img1.png';
import img2 from '../../assets/imgApp/img2.png';
import img3 from '../../assets/imgApp/img3.png';
import img4 from '../../assets/imgApp/img4.png';
import img5 from '../../assets/imgApp/img5.png';
import img6 from '../../assets/imgApp/img6.png';
import Banner3 from '../../assets/imgApp/banner3.jpg';
import Banner4 from '../../assets/imgApp/banner4.jpg';
import Banner5 from '../../assets/imgApp/banner5.jpg';
import Banner6 from '../../assets/imgApp/banner6.jpg';
import Banner7 from '../../assets/imgApp/banner7.jpg';
import Banner8 from '../../assets/imgApp/banner8.jpg';
import VastShadowRegular from '../../assets/fonts/VastShadowRegular.ttf';


export const ContainerBanner = styled.div`
    @font-face {
    font-family:'font1';
    src: url(${VastShadowRegular});
    }
    font-style: italic;
    margin-top: 50px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 50px;
    font-weight: 600;
    color: blue;
    padding: 50px 0;

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    height: 150px;
    padding: 10px 0;
    font-size: 22px;
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
    width: 60%;
    padding-left: 8px;
}
`;
export const ContentImg = styled.div`
    width: 25%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: 20s img1 infinite linear;
@keyframes img1 {
    0%{
        background-image: url(${img1});
    }
    15%{
        background-image: url(${img2});
    }
    27%{
        background-image: url(${img3});
    }
    45%{
        background-image: url(${img4});
    }
    60%{
        background-image: url(${img5});
    }
    80%{
        background-image: url(${img5});
    }
    100%{
        background-image: url(${img1});
    }
}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 40%;
}
`;
export const Span = styled.div`
    color: ${props => props.color};
`;