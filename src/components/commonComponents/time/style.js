import styled from 'styled-components';
import { white, bordergrey, blueGreen, linearGradient } from '../../../styles/colors';

export const TimeContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const TimeBox = styled.option`
    width: 90px;
    height: 35px;
    margin: 5px 0;
    border-radius: 1rem;
    border: 1px solid ${bordergrey};
    padding: 0.438rem;
    font-size: 1rem;
    line-height: 1.2rem;
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
       
`