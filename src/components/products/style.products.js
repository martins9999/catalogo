import styled from "styled-components";

export const ContainerProd = styled.div`
    border-radius: 10px;
    margin-top: 50px;
    width: 97%;
    display: grid;
    background-color: rgb(220,220,220);
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
    padding: 10px;
    box-sizing: border-box;
}
`;
export const ContentProd = styled.div`
    border-radius: 10px;
    width: 100%;
    height: ${props => props.height};
    box-sizing: border-box;
    background-color: rgb(255,255,255);
    color: #000;
    display: flex;
    flex-direction: column;
    border: #000 .5px solid;
&:hover {
}

> img {
    width: 100%;
    height: ${props => props.heightImg ? '25%' : '73.5%'};
    border-radius: 10px;
    box-sizing: border-box;
}
`;
export const ContainerINC = styled.div`
    font-size: 15px;
    width: 100%;
    height: ${props => props.info ? '17%' : '80%'};
    flex-direction: ${props => props.info ? 'row' : 'column'};
    padding: ${props => props.info ? '6px' : '6px 6px 0 6px'};
    gap: ${props => props.info ? '6px' : '0'};
    box-sizing: border-box;
    display: flex;
    >img {
        border-radius: 10px;
        width: ${props => props.info ? '25%' : '100%'};
        height: ${props => props.info ? '100%' : '87%'};
    }

`;
export const ContentINC = styled.div`
    display: flex;
    flex-direction: column;

`;
export const Info = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: ${props => props.info ? 'flex' : 'none'};
    flex-direction: column;
    padding-left: 7px;
    gap: 5px;

    >span {
        font-size: 13.5px;
        font-weight: 600;
    }
    /* >b {
        color: blue;
        font-size: 14px;
        preco {
            color: green;
        }
    } */

`;
export const ContainerPIA = styled.div`
    width: 100%;
    height: ${props => props.info ? '20%' : '20%'};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    /* >b {
        color: blue;
        display: ${props => props.info ? 'flex' : 'none'};
        preco {
            color: green;
        }
    } */
    >span {
        color: blue;
        preco {
            color: green;
        }
    }
`;
export const ContentPIA = styled.div`

    padding-left: 7px;
    display: flex;
    gap: 10px;
    > button2 {
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
        >svg {
                width: 17px;
                height: 17px;
        }
    }
> button1 {
    background-color: blue;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 2px 0;
    border-radius: 7px;
    color: #fff;
    cursor: pointer;
}
> b {
    font-size: 15px;
}
`;
