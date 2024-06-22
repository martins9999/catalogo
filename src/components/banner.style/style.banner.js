import styled from "styled-components";
import Banner1 from '../../assets/imgApp/banner1.jpg';
import Banner2 from '../../assets/imgApp/banner2.jpg';
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
export const ContentImg1 = styled.div`
    width: 25%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: 40s img1 infinite linear;
@keyframes img1 {
    0%{
        background-image: url(${Banner1});
    }
    10%{
        background-image: url(${Banner2});
    }
    20%{
        background-image: url(${Banner3});
    }
    30%{
        background-image: url(${Banner4});
    }
    40%{
        background-image: url(${Banner5});
    }
    50%{
        background-image: url(${Banner6});
    }
    60%{
        background-image: url(${Banner7});
    }
    70%{
        background-image: url(${Banner8});
    }
    80%{
        background-image: url(${Banner3});
    }
    90%{
        background-image: url(${Banner5});
    }
    100%{
        background-image: url(${Banner1});
    }

}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    width: 40%;
}
`;
export const ContentImg2 = styled.div`
    width: 25%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: 40s img2 infinite linear;
@keyframes img2 {
    0%{
        background-image: url(${Banner8});
    }
    10%{
        background-image: url(${Banner6});
    }
    20%{
        background-image: url(${Banner1});
    }
    30%{
        background-image: url(${Banner2});
    }
    40%{
        background-image: url(${Banner7});
    }
    50%{
        background-image: url(${Banner5});
    }
    60%{
        background-image: url(${Banner3});
    }
    70%{
        background-image: url(${Banner4});
    }
    80%{
        background-image: url(${Banner2});
    }
    90%{
        background-image: url(${Banner5});
    }
    100%{
        background-image: url(${Banner8});
    }

}
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    display: ${props => props.dsp};
    width: 50%;
}
`;
export const Span = styled.div`
    color: ${props => props.color};
`;