import styled, {css} from 'styled-components';
import {device} from '../../../styles/responsivity';
import {white, lightgrey, grey, darkgrey, blueGreen, iconDarkBlueGreen, greyBlueGreen, linearGradient, shadowToggle, lightblack} from '../../../styles/colors';
import {GiEuropeanFlag}  from "react-icons/gi";
import {FaFlagUsa, FaCheck} from "react-icons/fa";

const heightSmall = '130px';
const heightMiddle = '160px';
const heightLarge = '180px';
const heightHuge = '220px';

const commonWidth = '100%';
const responsiveWidth = '65%';

export const StyledToggle = styled.div`
    display: block;
    width: 100%;
`
export const StyledToggleButtonWrapper = styled.div`
    position: relative;
    width: ${commonWidth};
    height: ${heightSmall};
    margin-top: -130px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobileL} {
        height: ${heightMiddle};
        margin-top: ${-1*parseFloat(heightMiddle)}px;
    }
    @media ${device.tabletS} {
        width: ${responsiveWidth};
    }
    @media ${device.tabletM} {
        width: ${commonWidth};
    }
    @media ${device.laptop} {
        height: ${heightLarge};
        margin-top: ${-1*parseFloat(heightLarge)}px;
    }
    @media ${device.desktopM} {
        height: ${heightHuge};
        margin-top: ${-1*parseFloat(heightHuge)}px;
    }
`
export const StyledToggleContentWrapper = styled.div`
    position: relative;
    width: ${commonWidth};
    height: ${heightSmall};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobileL} {
        height: ${heightMiddle};
    }
    @media ${device.tabletS} {
        width: ${responsiveWidth};
    }
    @media ${device.tabletM} {
        width: ${commonWidth};
    }
    @media ${device.laptop} {
        height: ${heightLarge};
    }
    @media ${device.desktopM} {
        height: ${heightHuge};
    }
`
export const StyledToggleButton= styled.button`
    width: 50%;
    height: ${heightSmall};
    margin: 0;
    text-align: left;
    border: 1px solid ${greyBlueGreen};
    border-radius: ${props => props.primary ? '1rem 0 0 1rem' : '0 1rem 1rem 0'};
    background-color: transparent;
    @media ${device.mobileL} {
        height: ${heightMiddle};
    }
    @media ${device.laptop} {
        height: ${heightLarge};
    }
    @media ${device.desktopM} {
        height: ${heightHuge};
    }
`
export const StyledToggleContent= styled.div`
    position: relative;
    width: 50%;
    height: ${heightSmall};
    margin: 0;
    text-align: left;
    border-radius: ${props => props.primary ? '1rem 0 0 1rem' : '0 1rem 1rem 0'};
    background: ${props => props.design ? `${blueGreen}` : `${lightgrey}`};
    background: ${props => props.design ? `${linearGradient}` : `${lightgrey}`};
    box-shadow: ${props => props.design ? `${shadowToggle}` : 'none'};
    
    @media ${device.mobileL} {
        height: ${heightMiddle};
    }
    @media ${device.laptop} {
        height: ${heightLarge};
    }
    @media ${device.desktopM} {
        height: ${heightHuge};
    }
`
export const StyledIconContainer = styled.div`
    background-color: ${props => props.design ? `${iconDarkBlueGreen}` : `${grey}`};
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 1.3rem 0 0 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.desktopM} {
        width: 5rem;
        height: 5rem;
    }
`
export const ToggleParagraphFont = styled.p`
    font-size: 1rem;
    font-size: calc(.9rem + .5vw);
    color: ${props => props.design ? `${white}` : `${lightblack}` };
    line-height: 1.3rem;
    font-weight: 600;
    padding: .1rem 1.5rem;
    @media ${device.mobileL} {
        padding: .9rem 1.5rem;
    }
    @media ${device.desktopM} {
        padding: 1.6rem 1.5rem;
    }
`
export const Icon = css`
    color: ${props => props.design ? `${white}` : `${darkgrey}`};
    font-size: 1.6rem;

    @media ${device.desktopM} {
        font-size: 2.5rem;
    }
`
export const StyledIconEU = styled(GiEuropeanFlag)`
    ${Icon}
`
export const StyledIconUSA = styled(FaFlagUsa)`
    ${Icon}
`
export const StyledIconCheck = styled(FaCheck)`
    position: absolute;
    bottom: 18px;
    left: 90px;
    color: #fff;
    font-size: 1.4rem;
    font-size: calc(1rem + 0.5vw);

    @media ${device.mobileL} {
        bottom: 32px;
        left: 100px;
    }
    @media ${device.laptop} {
        bottom: 46px;
        left: 125px;
    }
`
