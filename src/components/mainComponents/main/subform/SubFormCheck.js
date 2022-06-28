import PropTypes, {string, shape} from 'prop-types';
import {useTranslation} from "react-i18next";
import {StyledSubFormContainer, StyledBlockWrapper, StyledCheckBox} from './style';
import {SubFormTitleFont, TitleCheckSubFormFont, ParagraphCheckSubFormFont} from "../../../../styles/fontStyles";
import {StyledErrorMessage} from '../../../commonComponents/selectAndInput/style';

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
    onCheckBox,
    confirmationError,
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
            <div>
                <StyledErrorMessage>{confirmationError}</StyledErrorMessage>
                <StyledCheckBox>
                    <input type='checkbox' id='GDPR' name='GDPR' value='GDPR' onChange={onCheckBox} />
                    <label htmlFor="GDPR">{t('checkInfo.agreement')}</label>
                </StyledCheckBox>
            </div>
        </StyledSubFormContainer>
    );
}

SubFormCheck.propTypes = {
    valLocality: PropTypes.string,
    valCountry: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    valState: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    valWork: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    valTime: PropTypes.string,
    valName: PropTypes.string,
    valLastname: PropTypes.string,
    valEmail: PropTypes.string,
    valPhone: PropTypes.string,
    confirmationError: PropTypes.string,
};

export default SubFormCheck;