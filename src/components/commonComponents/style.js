import styled from 'styled-components';
import {device} from '../../styles/responsivity';
import {CenterCenterWrapStyle, StartCenterWrapStyle} from '../../styles/styles';
import {lightblack} from '../../styles/colors';


export const StyledBox = styled.div`
    padding: 0 5px;
    margin: 0 2%;
    width: 190px;
    display: block;

    @media ${device.tabletS} { 
        width: 100%;
    }
`
export const StyledHeaderLogoContainer = styled.div`
    ${StartCenterWrapStyle}
    width: 190px;

    @media ${device.mobileL} {
        margin-bottom: 15px;
        justify-content: center;
    }
`
export const StyledFooterLogoContainer = styled.div`
    ${CenterCenterWrapStyle}
    padding: 0 5px;
    margin: 0 2%;
    width: 190px;
    height: 190px;

    @media ${device.tabletS} { 
        width: 100%;
        height: 100px;
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
        line-height: 29px;
        margin: 2px 0;
    }

`