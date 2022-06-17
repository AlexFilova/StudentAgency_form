import styled from 'styled-components';

export const commonHeight = '800px';

export const FlexWrapDivStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const FlexWrapStartDivStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
`
export const FlexNoWrapDivStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`
export const Container = styled(FlexWrapDivStyle)`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0.5rem 12%;
`
export const SpecialContainer = styled(FlexWrapStartDivStyle)`
    width: 100%;
`


