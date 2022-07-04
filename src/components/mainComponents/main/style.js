import styled from 'styled-components';
import {device} from '../../../styles/responsivity';

export const StyledMainWrapper = styled.main`
    margin: 40px 0;
`
export const StyledFormContainer = styled.section`
    width: 100%;

    @media ${device.tabletM} {
        width: 55%;
        height: auto;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-wrap: nowrap;
      }
`
export const StyledPictureContainer = styled.section`
    width: 45%;
    display: flex;
    justify-content: end;
    align-items: start;
    flex-wrap: nowrap;
`
export const StyledMainImg = styled.img`
    display: none;

    @media ${device.laptop} {
        display: block;
        margin-top: 0;
        width: 90%;
    }
`
export const StyledMainImgResponsiveTablet = styled.img`
    display: none;
    
    @media ${device.tabletM} {
        display: block;
        margin-top: 35px;
        width: 14rem;
    }
    @media ${device.laptop} {
        display: none;
    }
`