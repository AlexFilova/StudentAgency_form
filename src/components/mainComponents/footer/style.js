import styled from 'styled-components';
import {SpaceBetweenStartWrapStyle} from '../../../styles/styles';
import {grey} from '../../../styles/colors';
// import {device} from '../../../styles/responsivity';

export const StyledFooterSection = styled.footer`
    max-width: 1440px;
    margin: 0 auto;
`
export const StyledFooterContainer = styled.div`
    width: 80%;
    border-top: 1px solid ${grey};
    margin: 50px auto;
`
export const StyledFooterWrapper = styled.div`
    ${SpaceBetweenStartWrapStyle}
    width: 100%;
    margin-top: 30px;
    `
    // @media ${device.smallTablet} { 
    //     justify-content: start;
    //   }