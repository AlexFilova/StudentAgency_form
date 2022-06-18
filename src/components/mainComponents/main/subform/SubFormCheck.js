import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import {StyledSubFormContainer, StyledBlockWrapper} from './style';
import {SubFormTitleFont, TitleCheckSubFormFont, ParagraphCheckSubFormFont} from "../../../../styles/fontStyles";

const SubFormCheck = ({
    valLocality,
    valCountry,
    valState,
    valWork,
    valTime,
    valName,
    valLastname,
    valEmail,
    valPhone,
}) => {

    const { t } = useTranslation();

    return (
        <StyledSubFormContainer>
             <SubFormTitleFont>{t('titles.titleSubformThird')}</SubFormTitleFont>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.internshipLocality')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valLocality}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.coutry')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valCountry.value}{valState.value}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.work')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valWork.value}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.time')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valTime}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.fullName')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valName} {valLastname}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.emailAddress')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valEmail}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>
            <StyledBlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.phone')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valPhone}</ParagraphCheckSubFormFont>
            </StyledBlockWrapper>

        </StyledSubFormContainer>
    );
}

SubFormCheck.propTypes = {
    valLocality: PropTypes.string,
    valCountry: PropTypes.string,
    valState: PropTypes.string,
    valWork: PropTypes.string,
    valTime: PropTypes.string,
    valName: PropTypes.string,
    valLastname: PropTypes.string,
    valEmail: PropTypes.string,
    valPhone: PropTypes.string,
};

export default SubFormCheck;