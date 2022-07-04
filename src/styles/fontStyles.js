import styled, {css} from 'styled-components';
import {darkgrey, lightblack, strongdakrgrey, black} from './colors';

const commonFontSizeOne = '1rem';
const commonFontSizeOneCalc = 'calc(0.65rem + 0.5vw)';

export const LabelParagraphFont = css`
    font-size: ${commonFontSizeOne};
    font-size: ${commonFontSizeOneCalc};
    line-height: 1.2rem;
    font-weight: 800;
`
export const PlaceholderParagraphFont = css`
    font-size: ${commonFontSizeOne};
    font-size: ${commonFontSizeOneCalc};
    line-height: 1.2rem;
    font-weight: 400;
    color: ${darkgrey};
    font-family: Arial, Helvetica, sans-serif;
    font-family: 'Signika', sans-serif;
`
export const CommonFont = css`
    font-size: 0.85rem;
    font-size: calc(0.85rem + .5vw);
    font-weight: 800;
`
export const ButtonFont = css`
    font-size: 0.875rem;
    font-size: calc(0.6rem + .5vw);
    font-weight: 800;
`
export const WriteInputStyleFont = css`
    font-size: 1rem;
    font-size: calc(0.65rem + .5vw);
    ${strongdakrgrey};
    font-weight: 400;
`
export const CompanyTitleFont = styled.h1`
    font-size: 0.875rem;
    font-size: calc(0.875rem + .5vw);
    margin: 0;
    padding: 0;
`
export const SubFormTitleFont = styled.h2`
    font-size: 2.3rem;
    font-size: calc(1.5rem + 1vw);
    color: ${black};
    font-weight: 700;
    line-height: 3rem;
    line-height: calc(2rem + 1vw);
    width: 100%;
    margin-bottom: 28px;
`
export const BoxTitleFont = styled.h4`
    font-size: 1.4rem;;
    font-size: calc(0.9rem + .5vw);
    font-weight: 800;
    margin-bottom: 1rem;
`
export const SmallTitleFont = styled.h5`
    font-size: 1.2rem;
    font-size: calc(0.85rem + .5vw);
    line-height: 1.4rem;
    line-height: calc(1.1rem + .5vw);
    font-weight: 800;
    margin-top: 45px;
    margin-top: calc(2.6rem + 0.5vw);
    margin-bottom: 1rem;
    margin-bottom: calc(0.8rem + 0.5vw);
`
export const TitleCheckSubFormFont = styled.h6`
    ${CommonFont};
    margin: 0;
    margin-bottom: .5rem;
    margin-bottom: calc(0.5rem + 0.5vw);
`
export const BoxParagraphFont = styled.p`
    font-size: 1rem;
    font-size: calc(0.7rem + .5vw);
    line-height: 1.7rem;
    line-height: calc(1.5rem + .5vw);
    font-weight: 400;
    color: ${lightblack}
`
export const ParagraphCheckSubFormFont  = styled.p`
    font-size: 1rem;
    font-size: calc(0.8rem + .5vw);
    line-height: 1rem;
    line-height: calc(1.1rem + .5vw);
    font-weight: 400;
    margin: 0;
    margin-bottom: 2.5rem;
    margin-bottom: calc(1.5rem + 1vw);
`
