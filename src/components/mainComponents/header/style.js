import styled from 'styled-components';
import {SpaceBetweenCenterNoWrapStyle} from '../../../styles/styles';
import { ultralightgrey, darkgrey, strongdakrgrey, shadow } from '../../../styles/colors';

export const StyledHeaderSection = styled.header`
    width: auto;
    min-height: 24px;
    color: ${darkgrey};
    font-weight: 600;
    font-size: 1rem;
    background-color: ${ultralightgrey};
    box-shadow: ${shadow};
`
export const StyledHeaderElement = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 150px;
`
export const StyledIcon = styled.div`
    width: 30px;
    height: 30px;
`
export const StyledTranslator = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 70px;
    height: 30px;
    line-height: 32.5px;
`
export const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 30px;
    height: 30px;
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
    transition: width 0.5s, height 0.5s;
`