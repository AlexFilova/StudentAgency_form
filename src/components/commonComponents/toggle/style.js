import styled, {css} from 'styled-components';
import { white, lightgrey, grey, darkgrey, blueGreen, iconDarkBlueGreen, greyBlueGreen, linearGradient, shadowToggle } from '../../../styles/colors';
import { GiEuropeanFlag}  from "react-icons/gi";
import { FaFlagUsa, FaCheck } from "react-icons/fa";


const toggleHeight = '140px';
const transformedtoggleHeight = `${parseFloat(toggleHeight)+4}px`

export const ToggleConatiner = styled.div`
    width: 100%;
    height: ${toggleHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyledToggleButton= styled.button`
    position: relative;
    width: 50%;
    height: ${toggleHeight} ;
    margin: 0;
    text-align: left;
    border: 1px solid ${greyBlueGreen};
    border-radius: ${props => props.primary ? '1rem 0 0 1rem' : '0 1rem 1rem 0'};
    background: ${props => props.design ? `${blueGreen}` : `${lightgrey}` };
    background: ${props => props.design ? `${linearGradient}` : `${lightgrey}` };
    box-shadow: ${props => props.design ? `${shadowToggle}` : 'none' };
    transition: width .5s, height .5s;

    &:hover,
    &:active{
        width: 51%;
        height: ${transformedtoggleHeight};
    }
`
export const IconContainer = styled.div`
    background-color: ${props => props.design ? `${iconDarkBlueGreen}` : `${grey}`};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 15px 0 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Icon = css`
    color: ${props => props.design ? `${white}` : `${darkgrey}`};
    font-size: 1.8rem;
`
export const IconEU = styled(GiEuropeanFlag)`
    ${Icon}
`
export const IconUSA = styled(FaFlagUsa)`
    ${Icon}
`
export const IconCheck = styled(FaCheck)`
    position: absolute;
    bottom: 15px;
    right: 20px;
    color: white;
    font-size: 1.5rem;
`
