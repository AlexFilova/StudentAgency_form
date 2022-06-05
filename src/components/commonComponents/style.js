import styled from 'styled-components';
import { FlexNoWrapDivStyle } from '../../styles/styles';
import { messageBackGround } from '../../styles/colors';

//BOX component
export const StyledBox = styled.div`
    width: 190px;
    display: block;
`
//LOGO Component
export const LogoContainer = styled(FlexNoWrapDivStyle)`
    width: 100%;
`
//error message
export const ErrorMessageContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    display: none;
`
export const ErrorMessageWrapper = styled.div`
    width: 100%;
    margin: 0;
    margin-top: -30px;
    padding: 0;
    background-color: ${messageBackGround};
    border-radius: 0.5rem;
`