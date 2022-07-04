import styled from 'styled-components';
import {device} from '../../../../styles/responsivity';
import {blueGreen} from '../../../../styles/colors'; 

export const StyledSubFormContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
`
export const StyledBlockWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
`
export const StyledCheckBox = styled.div`
    width: 100%;

    input {
        width: 1.2rem;
        height: 1.2rem;
        width: calc(1rem + .5vw);
        height: calc(1rem + .5vw);
        accent-color: ${blueGreen};
        border-radius: 1rem;
    }

    label {
        font-size: 1rem;
        font-size: calc(0.8rem + .5vw);
        line-height: 1.2rem;
        line-height: calc(1.1rem + .5vw);
        font-weight: 400;
        margin-left: 1rem;
        margin-left: calc(1rem + .5vw);
    }
`
export const StyledDiv = styled.div`
    width: 100%;
`
export const StyledMainImgResponsivePhone = styled.img`
    display: none;

    @media ${device.tabletS} {
        display: block;
        position: absolute;
        top: 190px;
        right: 3.5%;
        width: calc(12rem + 1vw);
        height: auto;
    }
    @media ${device.tabletM} {
        display: none;
    }
`
