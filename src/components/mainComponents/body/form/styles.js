import styled, {css} from 'styled-components';
import {FlexNoWrapDivStyle, commonHeight} from '../../../../styles/styles';
import {white, darkgrey, darkOrange, ultralightOrange} from '../../../../styles/colors';
import {CommonFont} from '../../../../styles/fontStyles'

export const FormWrapper = styled.div`
    width: 75%;
    height: ${commonHeight};
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
    margin: 0;
    padding: 0;
    width: 50%;
    height: 59px;
`
export const StyledButton = styled.button`
    ${CommonFont};
    color: ${white};
    width: 124px;
    height: 59px;
    border-radius: 6.25rem;
    border: none;
`