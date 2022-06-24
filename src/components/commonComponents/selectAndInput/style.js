import styled from 'styled-components';
import Select from 'react-select';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { LabelParagraphFont, PlaceholderParagraphFont, WriteInputStyleFont } from '../../../styles/fontStyles';
import {redPink, bordergrey, darkgrey, blueGreen} from '../../../styles/colors';

export const StyledErrorMessage = styled.span`
    color: ${redPink};
`
export const StyledSelectBox = styled.div`
    width: 100%;
    height: 74px;
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
    margin: 12px 0 0 15px;
    text-align: left;
`
export const StyledSelect = styled(Select)`
    margin: 4px 0 0px 4px;
    font-size: 1rem;
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
        top:-30%;
        right:5%;
        padding:0;
    }
    .css-1gtu0rj-indicatorContainer {
        position: absolute;
        top:-30%;
        right:5%;
        padding:0;

        &:hover,
        &:active,
        &:focus {
            position: absolute;
            top:-30%;
            right:5%;
            padding:0;
        }
    }
`

export const StyledInput = styled.input`
    ${WriteInputStyleFont}
    width: 90%;
    border: none;
    margin: 10px 0 0px 13px;
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
    margin: 8px 16px;
    border: none;

    .PhoneInputCountrySelect {
        padding: 4px;
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