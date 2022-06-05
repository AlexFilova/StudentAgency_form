import styled from 'styled-components';
import { messageBackGround } from './colors';

export const Triangle = styled.div`
    margin-left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 35px 15px;
    border-color: transparent transparent ${messageBackGround} transparent;
`