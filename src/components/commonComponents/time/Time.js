import PropTypes, {shape, array, number, bool} from 'prop-types';
import {TimeContainer, TimeBox} from "./style";
import {StyledErrorMessage} from "../selectAndInput/style";
import {useTranslation} from "react-i18next";

const Time = ({onClick, btnStates, errorMessage}) => {

    const { t } = useTranslation();

    const truthyFalsyTime = btnStates.map(s => s.btnBoolean)
      
    return (
        <>
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        <TimeContainer>
            <TimeBox
                id={1}
                value='1 month'
                timeDesign={truthyFalsyTime[0] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.oneMonth')}
            </TimeBox>
            <TimeBox
                id={2}
                value='3 months'
                timeDesign={truthyFalsyTime[1] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.quarter')}
            </TimeBox>
            <TimeBox
                id={3}
                value='6 months'
                timeDesign={truthyFalsyTime[2] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.half')}
            </TimeBox>
            <TimeBox
                id={4}
                value='1 year'
                timeDesign={truthyFalsyTime[3] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.oneYear')}
            </TimeBox>
            <TimeBox
                id={5}
                value='2 years'
                timeDesign={truthyFalsyTime[4] === true ? 'timeDesign' : ''}
                onClick={onClick}
                    >{t('internship.time.twoYears')}
                </TimeBox>
            <TimeBox
                id={6}
                value='4 years'
                timeDesign={truthyFalsyTime[5] === true ? 'timeDesign' : ''}
                onClick={onClick}
            >
                {t('internship.time.fourYears')}
            </TimeBox>
        </TimeContainer>
        </>

    );
}

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