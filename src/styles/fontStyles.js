import styled, { css } from 'styled-components';
import { white, darkgrey, lightblack, strongdakrgrey, black, darkOrange } from './colors';

//label of input & label of price iside option
export const LabelParagraphFont = css`
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 800;
`
// placeholder
export const PlaceholderParagraphFont = css`
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 400;
    color: ${darkgrey};
    font-family: Arial, Helvetica, sans-serif;
    font-family: 'Signika', sans-serif;
`
//BUTTON + title into check-subform
export const CommonFont = css`
    font-size: 0.875rem;
    line-height: 1.188rem;
    font-weight: 800;
`
//when user writes into input
export const WriteInputStyleFont = css`
    font-size: 1rem;
    ${strongdakrgrey};
    font-weight: 400;
`
//header
export const CompanyTitleFont = styled.h1`
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
`
// big title inside subform in form
export const SubFormTitleFont = styled.h2`
    font-size: 2rem;
    color: ${black};
    font-weight: 700;
    line-height: 2.5rem;
    width: 100%;
    margin-bottom: 28px;
`
//Good boy title next icon in footer
export const BrandTitleFont = styled.h3`
    font-size: 1.5rem;
    width: 100px;
    font-weight: 600;
    text-align: left;
`
// title in box of footer
export const BoxTitleFont = styled.h4`
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 800;
    margin-bottom: 15px;
`
//small title below big title
export const SmallTitleFont = styled.h5`
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 800;
    margin-top: 45px;
    margin-bottom: 15px;
`
// titles in check-subforms
export const TitleCheckSubFormFont = styled.h6`
    ${CommonFont};
    margin: 0;
    margin-bottom: 8px;
`
// content of box inside footer
export const BoxParagraphFont = styled.p`
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${lightblack}
`
export const ParagraphCheckSubFormFont  = styled.p`
    font-size: 1rem;
    line-height: 1.188rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 30px;
`
// content of big toggle
export const ToggleParagraphFont = styled.p`
    font-size: 1rem;
    color: ${props => props.design ? `${white}` : `${lightblack}` };
    line-height: 1.3rem;
    font-weight: 600;
    padding: .2rem .8rem;
`
// error message font
export const MessageParagraphFont = styled.p`
    font-size: 0.8rem;
    color: ${darkOrange}};
    line-height: 1rem;
    font-weight: 600;
    padding: 0.8rem;
`
