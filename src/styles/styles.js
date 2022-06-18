import styled, {css} from 'styled-components';

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
    margin: 0 auto;
    padding: 0.5rem 12%;
`
export const StyledSubContainer = styled.div`
    ${SpaceBetweenStartWrapStyle}
    width: 100%;
`