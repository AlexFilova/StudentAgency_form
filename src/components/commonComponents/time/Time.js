import PropTypes, {shape, array, number, bool} from 'prop-types';
import {StyledTimeContainer, StyledTimeBtn} from "./style";
import {StyledErrorMessage} from "../selectAndInput/style";
import {useTranslation} from "react-i18next";

const Time = ({onClick, btnStates, errorMessage}) => {

    const { t } = useTranslation();

    const truthyFalsyTime = btnStates.map(s => s.btnBoolean)
      
    return (
        <>
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        <StyledTimeContainer>
            <StyledTimeBtn
                id={1}
                value='1 month'
                timeDesign={truthyFalsyTime[0] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.oneMonth')}
            </StyledTimeBtn>
            <StyledTimeBtn
                id={2}
                value='3 months'
                timeDesign={truthyFalsyTime[1] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.quarter')}
            </StyledTimeBtn>
            <StyledTimeBtn
                id={3}
                value='6 months'
                timeDesign={truthyFalsyTime[2] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.half')}
            </StyledTimeBtn>
            <StyledTimeBtn
                id={4}
                value='1 year'
                timeDesign={truthyFalsyTime[3] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.oneYear')}
            </StyledTimeBtn>
            <StyledTimeBtn
                id={5}
                value='2 years'
                timeDesign={truthyFalsyTime[4] === true ? 'timeDesign' : ''}
                onClick={onClick}
                    >{t('internship.time.twoYears')}
                </StyledTimeBtn>
            <StyledTimeBtn
                id={6}
                value='4 years'
                timeDesign={truthyFalsyTime[5] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.fourYears')}
            </StyledTimeBtn>
        </StyledTimeContainer>
        </>

    );
};

Time.propTypes = {
    onClick: PropTypes.func,
    btnStates: PropTypes.oneOfType([
        array,
        shape({
            id: number,
            btnBoolean: bool,
        }),
    ]),
    errorMessage: PropTypes.string
};

export default Time;