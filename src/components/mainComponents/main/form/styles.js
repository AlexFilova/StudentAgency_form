import styled, {css} from 'styled-components';
import {device} from '../../../../styles/responsivity';
import {SpaceBetweenCenterNoWrapStyle} from '../../../../styles/styles';
import {white, darkgrey, darkOrange, ultralightOrange, darkPink, blueGreen, shadowButton} from '../../../../styles/colors';
import {CommonFont} from '../../../../styles/fontStyles'

export const StyledFormWrapper = styled.div`
    width: 85%;
    height: auto;

    @media ${device.tabletM} { 
        width: 100%;
      }
`
export const StyledProgressBar = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 90px;
    height: 20px;
`
const Bar = css`
    height: 6px;
    border-radius: 0.625rem;
`
export const StyledActiveBar = styled.div`
    ${Bar}
    width:40px;
    background: ${darkOrange};
    background: linear-gradient(94deg, ${darkOrange} 0%, ${ultralightOrange} 100%);
    
`
export const StyledDisActiveBar = styled.div`
    ${Bar}
    width:20px;
    background-color: ${darkgrey};
`

export const StyledButtonContainer = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    width: 100%;
    height: 59px;
    justify-content: center;
    margin-top: 50px;
`
export const StyledButtonWrapper = styled.div`
    ${SpaceBetweenCenterNoWrapStyle}
    justify-content: ${props => props.endJustified ? 'end' : 'start'};
    margin: 0;
    padding: 0;
    width: 50%;
    height: 59px;
`
export const StyledButton = styled.button`
    ${CommonFont}
    width: ${props => props.backBtn ? '90px ': '160px'};
    height: 59px;
    color: ${white};
    background-color: ${props => props.backBtn ? `${darkPink}`: `${blueGreen}`};
    border-radius: 6.25rem;
    border: none;
    box-shadow: ${props => props.submitBtn && `${shadowButton}`};
`
export const StyledNextButton = styled.button`
    ${CommonFont}
    color: ${white};
    width: 160px;
    height: 59px;
    background-color: ${darkgrey};
    border-radius: 6.25rem;
    border: none;
    box-shadow: ${shadowButton};
`