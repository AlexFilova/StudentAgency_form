import styled from 'styled-components';
import {device} from '../../../styles/responsivity';
import {CenterCenterWrapStyle, StyledContainer} from '../../../styles/styles';
import {white, blueGreen, lightbrown, darkOrange} from '../../../styles/colors'

export const StyledErrorSubPage = styled.div`
    ${CenterCenterWrapStyle};
    width: 100%;
    margin: 15px 0;
`
export const StyledErrorDivImg = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${device.tabletM} { 
       display: none;
    }
`
export const StyledErrorImg = styled.img`
    width: 90%;

    @media ${device.mobileL} { 
        width: 60%;
    }
`
export const StyledSideErrorDivBox = styled.div`
    width: 100%;
    text-align:center;

    @media ${device.tabletS} {
        width: 50%;
    }
    @media ${device.tabletM} {
        width: 100%;
        margin-top: 120px;
    }
    @media ${device.laptop} { 
        width: 78%;
        margin-top: 55px;
    }
    @media ${device.laptopL} {
        width: 70%;
        margin-top: 110px;
    }
    @media ${device.desktop} {
        margin-top: 180px;
    }
`
export const StyledSideContainer = styled(StyledContainer)`
    ${CenterCenterWrapStyle};
    background-color: ${props => props.noPage && `${blueGreen}`};
    height: ${props => props.noPage && `97.2vh`}
`
export const StyledSideSubPage = styled.div`
    ${CenterCenterWrapStyle};
    width: 100%;
    margin: ${props => props.noPage ? '0' :'10% 0;'};

    @media ${device.tabletS} {
        width: ${props => props.noPage ? '70%' : '80%'};
        justify-content: ${props => props.noPage ? 'center' : 'space-between'}
    }
`
export const StyledSideImgDiv = styled.div`
    display: block;
    width: 65%;
    margin-top: 2rem;

    @media ${device.tabletS} {
        width: ${props => props.noPage ? '65%' : '35%'};
        margin-top: 0;
    }
`
export const StyledSideImg = styled.img`
    width: 100%;
`
export const StyledSideDivBox = styled.div`
    width: 100%;
    text-align:center;

    @media ${device.tabletS} {
        width: ${props => props.noPage ? '100%' : '50%'};
    }
    // @media ${device.tabletM} {
    //     width: 100%;
    // }
    // @media ${device.laptop} { 
    //     width: 78%;
    // }
`
export const StyledSideTitle = styled.h2`
    width: 100%;
    margin: 0;
    color: ${props => props.noPage && `${white}`};
    font-size: ${props => props.done ? '3.5rem' : '1.5rem'};
    font-size: ${props => props.done ? `calc(3.5rem + 0.5vw)` : `calc(1.5rem + 1.5vw)`};
`
export const StyledSideContent = styled.p`
    width: 100%;
    font-size: 1.2rem;
    font-size: calc(1rem + .5vw);
    line-height: 1.2rem;
    line-height: calc(1.6rem + .5vw);
    margin: 0;
    margin-top: 20px;
    color: ${props => props.noPage && `${white}`};
`
export const StyledNoPageButtonPart = styled.div`
    ${CenterCenterWrapStyle};
    width:100%;
`
export const StyledNoPageButton = styled.button`
    margin-right: 0.4rem;
    width: 6rem;
    width: calc(6rem + 1vw);
    height: 1.4rem;
    height: calc(1.5rem + 1vw);
    background-color: ${darkOrange};
    color: ${white};
    border-radius: 1rem;
    border-radius: calc(1rem + 0.5vw);
    border: none;
    font-size: 1.2rem;
    font-size: calc(1rem + .5vw);

    &:hover{
        background-color: ${lightbrown};
    }

`
export const StyledNoPageParagraph = styled.p`
    color: #fff;
    font-size: 1.2rem;
    font-size: calc(0.7rem + .5vw);
`