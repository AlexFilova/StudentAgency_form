import styled from 'styled-components';
import {device} from '../../../styles/responsivity';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {SpaceBetweenCenterNoWrapStyle, StyledContainer} from '../../../styles/styles';
import {white, darkOrange, ultralightgrey, darkgrey, strongdakrgrey, shadow} from '../../../styles/colors';

export const StyledHeaderSection = styled.header`
    width: 100%;
    min-height: 24px;
    color: ${darkgrey};
    font-weight: 600;
    font-size: 1rem;
    font-size: calc(1rem + .5vw);
    background-color: ${ultralightgrey};
    box-shadow: ${shadow};
` 
export const StyledContainerHeader = styled(StyledContainer)`
    @media ${device.mobileS} {
        justify-content: center;
    }
    @media ${device.tabletS} {
        justify-content: space-between;
    }
` 
export const StyledSocialLanguageElement = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 100%;
    margin: 0.5rem 0px;
   
    @media ${device.tabletS} {
        width: 18rem;
    }
`
export const StyledIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
`
export const StyledIconsDiv = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 7.5rem;
    height: auto;
`
export const StyledTranslatorDiv = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 7.5rem;
    height: auto;
    line-height: 2.031rem;
`
export const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 2.5rem;
    height: 2.5rem;
    color: ${darkgrey};
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background 0.5s;

    &:hover,
    &:active {
        background: ${strongdakrgrey};
    }
`
export const StyledButtonLang = styled.button`
    width:  ${props => props.resolvedStyle ? '45px' :'35px'};
    height: ${props => props.resolvedStyle ? '45px' :'35px'};
    color: ${props => props.resolvedStyle ? `${white}` : `${darkOrange}`};
    border-radius: 50%;
    border: ${props => props.resolvedStyle ? 'none' : `0.15rem solid ${darkOrange}`};
    padding: 0;
    font-size: 1rem;
    background-color: ${props => props.resolvedStyle ? `${darkOrange}` : 'transparent'};
    font-weight: ${props => props.resolvedStyle ? 'bold' : 'normal'};
    box-shadow:  ${props => props.resolvedStyle ? 'rgb(0 0 0 / 15%) 0px 6px 7px 2px' : 'none'};
    transition: width 0.5s, height 0.5s;
`
export const StyledSocialIconFb = styled(FaFacebookF)`
    font-size: 1.3rem;
`
export const StyledSocialIconInsagram = styled(FaInstagram)`
    font-size: 1.8rem;
`