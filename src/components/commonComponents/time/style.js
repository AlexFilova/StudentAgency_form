import styled from 'styled-components';
import {device} from '../../../styles/responsivity';
import {white, bordergrey, blueGreen, linearGradient} from '../../../styles/colors';

export const StyledTimeContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const StyledTimeBtn = styled.option`
    width: 35%;
    height: 2.8rem;
    height: calc(3rem + 0.5vw);
    margin: 0.8rem 2%;
    border-radius: 1rem;
    border: 1.3px solid ${bordergrey};
    padding: 0.438rem;
    font-size: 1rem;
    font-size: calc(0.85rem + .5vw);
    line-height: 2rem;
    line-height: calc(2rem + .5vw);
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

    @media ${device.laptop} { 
        width: 29%;
      }
       
`