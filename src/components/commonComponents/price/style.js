import styled from 'styled-components';
import { bordergrey } from '../../../styles/colors';

export const PriceContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PriceBox = styled.option`
    width: auto;
    height: 35px;
    border-radius: .5rem;
    border: 1px solid ${bordergrey};
    padding: 0.438rem;
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 800;
    text-align: center;
`
// export const TextWrapper = styled.p`
//     margin-top: 10px;
// `