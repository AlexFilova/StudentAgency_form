import styled from 'styled-components';
import Select from 'react-select';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { LabelParagraphFont, PlaceholderParagraphFont, WriteInputStyleFont } from '../../../styles/fontStyles';
import {redPink, bordergrey, darkgrey, blueGreen, lightBlueGreen} from '../../../styles/colors';

const indicatorPositionTop = '-25%';
const indicatorPositionRight = '8%';

export const StyledErrorMessage = styled.span`
    color: ${redPink};
    font-size: .8rem;
    font-size: calc(.7rem + .5vw);
`
export const StyledSelectBox = styled.div`
    position: relative;
    width: 100%;
    min-height: 60px;
    border: 1px solid ${bordergrey};
    border-radius: .5rem;
    margin-bottom: 16px;

    &:focus-within {
        outline: none;
        border: 1px solid ${blueGreen};
    }
`
export const StyledLabel = styled.label`
    ${LabelParagraphFont};
    display: block;
    width: 100%;
    margin: 1rem 0 0.6rem 1rem;
    margin: calc(0.3rem + 0.5vw) 0 calc(0.01rem + 0.5vw) calc(0.6rem + 0.5vw);
    text-align: left;
`
export const StyledSelect = styled(Select)`
    margin-left: 0.4rem;
    margin-left: calc(0.1rem + .5vw);
    font-size: 1rem;
    font-size: calc(0.65rem + .5vw);
    font-weight: 400;
    .css-1s2u09g-control {
        width: 100%;
        min-height: 30px;
        background-color: transparent;
        border: 0;
        color: ${darkgrey};
    }
    .Select__control.Select__control--is-focused.css-1pahdxg-control{
        background-color: transparent;
        border: 0;
        min-height: 30px;
        -moz-box-shadow: none;
        -goog-ms-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;

        &:hover,
        &:active,
        &:focus {
            border: 0;
            min-height: 30px;
            -moz-box-shadow: none;
            -goog-ms-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
    }
    .css-14el2xx-placeholder{
        ${PlaceholderParagraphFont}
    }
    .css-1okebmr-indicatorSeparator {
        display: none;
    }
    .css-tlfecz-indicatorContainer {
        position: absolute;
        top: ${indicatorPositionTop};
        right:${indicatorPositionRight};
        padding:0;
    }
    .css-1gtu0rj-indicatorContainer {
        position: absolute;
        top: ${indicatorPositionTop};
        right:${indicatorPositionRight};
        padding:0;
        svg {
            color: ${blueGreen};
        }

        &:hover,
        &:active,
        &:focus {
            position: absolute;
            top: ${indicatorPositionTop};
            right:${indicatorPositionRight};
            padding:0;
        }
    }
    .Select__option--is-focused{
        background-color: ${lightBlueGreen};
    }
    .css-9gakcf-option{
        background-color: ${blueGreen};
    }
`

export const StyledInput = styled.input`
    ${WriteInputStyleFont}
    width: 90%;
    border: none;
    margin-left: 0.9rem;
    margin-left: calc(0.5rem + .5vw);
    margin-bottom: calc(0.05rem + 0.5vw);
    font-family: 'Signika', sans-serif;

    *&:focus{
        outline: none;
    }

    &::placeholder {
        ${PlaceholderParagraphFont};
      }

    &:invalid ~ span {
        display: block;
    }
`
export const StyledPhoneInput = styled(PhoneInput)`
    margin: 0.3rem 0 0.5rem 1.8rem;
    margin: 0.3vw 0 0.5vw calc(0.8rem + 0.5vw);
    border: none;
    font-size: 1rem;
    font-size: calc(0.65rem + .5vw);
    font-family: 'Signika', sans-serif;

    .PhoneInputCountrySelect {
        width: auto;
        height: auto;
    }

    .PhoneInputCountryIcon--border {
        box-shadow: 0 0 0 1px ${bordergrey};
    }

    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border{
        box-shadow: 0 0 0 1px ${bordergrey};
    }
  
    .PhoneInputCountrySelectArrow {
        width: 7px;
        height: 7px;
        margin-left: 9px;
        margin-bottom: 2px;
        border-bottom-width: 2px;
        border-right-width: 2px;
    }
    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
        color: ${bordergrey};
    }
    .PhoneInputInput {
        ${WriteInputStyleFont}
        border: none;
        margin-left: 4px;

        *&:focus{
            outline: none;
        }
    }
`