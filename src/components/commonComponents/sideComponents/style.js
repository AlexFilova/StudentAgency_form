import styled from 'styled-components';
import {device} from '../../../styles/responsivity';
import {BoxParagraphFont} from '../../../styles/fontStyles'

export const StyledErrorSubPage = styled.div`
    width: 100%;
    margin: 30px 0;

    @media ${device.tabletM} { 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
    }
    @media ${device.tabletS} { 
        flex-wrap: wrap;
    }
`
export const StyledErrorDivImg = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledErrorImg = styled.img`
    width: 80%;

    @media ${device.tabletM} { 
        width: 100%;
    }
`
//----------------------------------------------------
export const StyledFinalSubPage = styled.div`
    width: 100%;
    margin: 160px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media ${device.tabletS} { 
        justify-content: center;
        margin: 0;
    }
`
export const StyledFinalDivImg = styled.div`
    display: none;

    @media ${device.tabletM} {
        display: block;
        width: 47%;
        margin-left: 0.9rem;
    }
`
export const StyledFinalImg = styled.img`
    @media ${device.tabletM} {
        width: 100%;
    }
`
export const StyledSideDivBox = styled.div`
    width: 100%;
    padding: 0 5px;
    margin: 0 2%;

    @media ${device.tabletM} { 
        width: 50%;
    }
    @media ${device.tabletS} { 
        width: 100%;
    }
`
export const StyledSideTitle = styled.h2`
    width: 100%;
    margin: 0;
    font-size: ${props => props.done ? `calc(3.5rem + 1vw)` : `calc(1.5rem + 1.5vw)`};
`
export const StyledSideContent = styled(BoxParagraphFont)`
    width: 100%;
    font-size: calc(1rem + 1vw);
    line-height: calc(1.6rem + 1vw);
`