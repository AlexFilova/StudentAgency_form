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
    ${SpaceBetweenStartWrapStyle}
    max-width: 1920px;
    min-width: 280px;
    margin: 0 auto;
    padding: 0.5rem 10%;
`