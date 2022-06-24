import styled from 'styled-components';
import {device} from '../../../styles/responsivity';

export const StyledMainWrapper = styled.main`
    margin: 40px 0;
`
export const StyledFormContainer = styled.section`
    width: 55%;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-wrap: nowrap;

    @media ${device.tabletM} {
        width: 100%;
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
    margin-top: 80px;
    width: 380px;

    @media ${device.laptop} {
        display: none;
      }
`
export const StyledMainImgResponsiveTablet = styled.img`
    @media ${device.desktop} {
        display: none;
    }
    @media ${device.laptop} {
        display: block;
        margin-top: 75px;
        width: 270px;
    }
    @media ${device.tabletM} {
        display: none;
    }
`