import styled from 'styled-components';
import {commonHeight} from '../../../styles/styles';

export const MainWrapper = styled.main`
    margin-top: 40px;
`
export const FormContainer = styled.div`
    width: 55%;
    height: ${commonHeight};
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: nowrap;
`
export const SubContainerPicture = styled.div`
    width: 40%;
    height: ${commonHeight};
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: nowrap;
`
export const MainImg = styled.img`
    margin-top: 50px;
    width: 400px;
`
export const Form = styled.form`
    width: 65%;
`
export const SubForm = styled.div`
    background-color: red;
    width: 65%;
`
