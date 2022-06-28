import styled from 'styled-components';
import {device} from '../../../../styles/responsivity'

export const StyledSubFormContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
`
export const StyledBlockWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
`
export const StyledCheckBox = styled.div`
    width: 100%;
`
export const StyledDiv = styled.div`
    width: 100%;
`
export const StyledMainImgResponsivePhone = styled.img`
    display: none;

    @media ${device.tabletM} {
        display: block;
        position: absolute;
        top: 154px;
        right: 5%;
        width: calc(12rem + 1vw);
}
@media ${device.tabletS} {
    display: none;
}
`
