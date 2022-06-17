import styled, {css} from 'styled-components';
import {FlexNoWrapDivStyle} from '../../../../styles/styles';
import {white, darkgrey, darkOrange, ultralightOrange, darkPinkRed, blueGreen, shadowButton} from '../../../../styles/colors';
import {CommonFont} from '../../../../styles/fontStyles'

export const FormWrapper = styled.div`
    width: 75%;
    height: auto;
`
export const ProgressBar = styled(FlexNoWrapDivStyle)`
    width: 90px;
    height: 20px;
`
const Bar = css`
    height: 6px;
    border-radius: 0.625rem;
`
export const ActiveBar = styled.div`
    ${Bar}
    width:40px;
    background: ${darkOrange};
    background: linear-gradient(94deg, ${darkOrange} 0%, ${ultralightOrange} 100%);
    
`
export const DisActiveBar = styled.div`
    ${Bar}
    width:20px;
    background-color: ${darkgrey};
`

export const StyledButtonContainer = styled(FlexNoWrapDivStyle)`
    width: 100%;
    height: 59px;
    justify-content: center;
    margin-top: 68px;
    margin-bottom: 159px;
`
export const StyledButtonWrapper = styled(FlexNoWrapDivStyle)`
    justify-constent: ${props => props.endJustified ? 'end' : 'start'};
    margin: 0;
    padding: 0;
    width: 50%;
    height: 59px;
`
export const StyledButton = styled.button`
    ${CommonFont};
    width: ${props => props.backBtn ? '90px ': '160px'};
    height: 59px;
    color: ${white};
    background-color: ${props => props.backBtn ? `${darkPinkRed}`: `${blueGreen}`};
    border-radius: 6.25rem;
    border: none;
    box-shadow: ${props => props.submitBtn && `${shadowButton}`};
`
export const StyledNextButton = styled.button`
    ${CommonFont};
    // position: absolute;
    // right: 0;
    // bottom: -127px;
    color: ${white};
    width: 160px;
    height: 59px;
    background-color: ${darkgrey};
    border-radius: 6.25rem;
    border: none;
    box-shadow: ${shadowButton};
`