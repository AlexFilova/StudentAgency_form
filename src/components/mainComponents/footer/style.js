import styled from 'styled-components';
import {SpaceBetweenStartWrapStyle} from '../../../styles/styles';
import {grey} from '../../../styles/colors';

export const StyledFooterSection = styled.footer`
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;
    padding: 0.5rem 10%;
`
export const StyledFooterContainer = styled.div`
    border-top: 1px solid ${grey};
    margin: 0 auto;
`
export const StyledFooterWrapper = styled.div`
    ${SpaceBetweenStartWrapStyle}
    width: 100%;
    margin-top: 30px;
    `