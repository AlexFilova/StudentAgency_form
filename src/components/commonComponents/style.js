import styled from 'styled-components';
import {device} from '../../styles/responsivity';
import {CenterCenterWrapStyle} from '../../styles/styles';
import {lightblack} from '../../styles/colors';

export const StyledBox = styled.div`
    width: 100%;
    display: block;

    @media ${device.tabletS} { 
        width: 14.5rem;
        width: calc(12rem + 5vw);
        margin: 0 1%;
    }
    @media ${device.tabletM} { 
        width: 19.5rem;
        width: calc(16rem + 5vw);
    }
    @media ${device.laptopM} { 
        width: 25.3rem;
        width: calc(19rem + 5vw);
    }
    @media ${device.laptopL} { 
        width: 18rem;
        width: calc(13.2rem + 5vw);
        padding: 0;
    }
`
export const StyledHeaderLogoContainer = styled.div`
    ${CenterCenterWrapStyle}
    width: 100%;
    margin: 0.8rem 0px;

    @media ${device.tabletS} {
        width: auto;
        justify-content: start;
        margin: 0.4rem 0px;
    }
`
export const StyledFooterLogoContainer = styled.div`
    ${CenterCenterWrapStyle}
        width: 100%;
        height: 5rem;

    @media ${device.tabletS} { 
        width: 14.5rem;
        width: calc(12rem + 5vw);
        margin: 0 1%;
        height: calc(15rem + 0.5vw);
    }
    @media ${device.tabletM} { 
        width: 19.5rem;
        width: calc(16rem + 5vw);
    }
    @media ${device.laptopM} { 
        width: 25.3rem;
        width: calc(19rem + 5vw);
    }
    @media ${device.laptopL} { 
        width: 18rem;
        width: calc(13.2rem + 5vw);
        padding: 0;
    }
`
export const StyledLinkDiv = styled.div`
    margin-top: -5px;
`
export const StyledLink = styled.a`
    display: block;
    text-decoration: none;
    color: ${lightblack};
    font-size: 0.9rem;
    height: 28px;

    p {
        margin: calc(0.2rem + 0.1vw) 0;
    }
`
export const StyledLogoImg = styled.img`
    width: 7rem;
    height: auto;
    width: calc(5rem + 3vw);
`