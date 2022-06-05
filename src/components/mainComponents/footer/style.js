import styled from 'styled-components';
import { FlexWrapDivStyle } from '../../../styles/styles';
import { grey } from '../../../styles/colors';
import { device } from '../../../styles/responsivity';

export const FooterSection = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`
export const FooterContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid ${grey};
`
export const FooterWrapper = styled(FlexWrapDivStyle)`
    width: 100%;
    margin: 117px auto;

    @media ${device.smallTablet} { 
        justify-content: center;
      }
`