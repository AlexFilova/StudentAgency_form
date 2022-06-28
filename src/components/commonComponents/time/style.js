import styled from 'styled-components';
import {device} from '../../../styles/responsivity';
import { white, bordergrey, blueGreen, linearGradient } from '../../../styles/colors';

export const StyledTimeContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const StyledTimeBtn = styled.option`
    width: 29%;
    height: 40px;
    margin: 15px 2%;
    border-radius: 1rem;
    border: 1px solid ${bordergrey};
    padding: 0.438rem;
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 800;
    text-align: center;
    color: ${props => props.timeDesign && `${white}` };
    background: ${props => props.timeDesign && `${blueGreen}`};
    background: ${props => props.timeDesign && `${linearGradient}`};
    transition: border-radius .2s;

    &:hover,
    &:active{
        border-radius: .5rem;
        border-color: ${blueGreen};
    }

    @media ${device.mobileL} { 
        width: 40%;
      }
       
`