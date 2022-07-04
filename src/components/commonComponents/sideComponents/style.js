import styled from 'styled-components';
import {device} from '../../../styles/responsivity';
import { CenterCenterWrapStyle } from '../../../styles/styles';

export const StyledErrorSubPage = styled.div`
    ${CenterCenterWrapStyle};
    width: 100%;
    margin: 15px 0;
`
export const StyledErrorDivImg = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${device.tabletM} { 
       display: none;
    }
`
export const StyledErrorImg = styled.img`
    width: 90%;

    @media ${device.mobileL} { 
        width: 60%;
    }
`
export const StyledSideErrorDivBox = styled.div`
    width: 100%;
    text-align:center;

    @media ${device.tabletS} {
        width: 50%;
    }
    @media ${device.tabletM} {
        width: 100%;
        margin-top: 120px;
    }
    @media ${device.laptop} { 
        width: 78%;
        margin-top: 55px;
    }
`
export const StyledFinalSubPage = styled.div`
    ${CenterCenterWrapStyle}
    width: 100%;
    margin: 0;

    @media ${device.tabletS} { 
        justify-content: space-between;
        margin: 110px 0;
    }
`
export const StyledFinalImgDiv = styled.div`
    display: block;
    width: 48%;
    margin-top: 3rem;

    @media ${device.tabletS} {
        width: 40%;
        margin-top: 0;
    }
    @media ${device.tabletM} {
        display: none;
    }
`
export const StyledFinalImg = styled.img`
    width: 100%;
`
export const StyledSideFinalDivBox = styled.div`
    width: 100%;
    text-align:center;

    @media ${device.tabletS} {
        width: 50%;
    }
    @media ${device.tabletM} {
        width: 100%;
    }
    @media ${device.laptop} { 
        width: 78%;
    }
`
export const StyledSideTitle = styled.h2`
    width: 100%;
    margin: 0;
    font-size: ${props => props.done ? '3.5rem' : '1.5rem'};
    font-size: ${props => props.done ? `calc(3.5rem + 0.5vw)` : `calc(1.5rem + 1.5vw)`};
`
export const StyledSideContent = styled.p`
    width: 100%;
    font-size: 1.2rem;
    font-size: calc(1rem + .5vw);
    line-height: 1.2rem;
    line-height: calc(1.6rem + .5vw);
    margin: 0;
    margin-top: 20px;
`