import styled, {css} from 'styled-components';
import {device} from './responsivity';

export const CenterCenterWrapStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const SpaceBetweenCenterWrapStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const SpaceBetweenCenterNoWrapStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`
export const SpaceBetweenStartWrapStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
`
export const StartCenterWrapStyle = css`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
`
export const SpaceBetweenStartNoWrapStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: nowrap;
`
export const StyledContainer = styled.div`
    ${SpaceBetweenCenterWrapStyle}
    max-width: 1440px;
    min-width: 360px;
    margin: 0 auto;
    padding: 0.5rem 10%;

    @media ${device.mobileL} { 
            justify-content: center;
          }
`
export const StyledSubContainer = styled.div`
    ${SpaceBetweenStartWrapStyle}
    width: 100%;
`