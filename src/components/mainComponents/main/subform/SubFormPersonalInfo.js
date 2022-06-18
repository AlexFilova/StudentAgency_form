import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import {SubFormTitleFont, SmallTitleFont} from "../../../../styles/fontStyles";
import {StyledSubFormContainer} from './style';
import {StyledSelectBox, StyledErrorMessage, StyledLabel, StyledPhoneInput} from "../../../commonComponents/selectAndInput/style";
import Input from "../../../commonComponents/selectAndInput/Input";
import 'react-phone-number-input/style.css'

const SubFormPersonalInfo = ({
    valName,
    valLastname,
    valEmail,
    valPhone,
    onChangeValName,
    onChangeValLastname,
    onChangeValEmail,
    onChangeValPhone,
    nameError,
    lastnameError,
    emailError,
    phoneError,
}) => {

    const { t } = useTranslation();

    return (
        <StyledSubFormContainer>
            <SubFormTitleFont>{t('titles.titleSubformSecond')}</SubFormTitleFont>
            <SmallTitleFont>{t('personalInfo.aboutYou')}</SmallTitleFont>
            <Input
                htmlFor={'name'}
                inputLabel={t('personalInfo.name')}
                type={'text'}
                id={'name'}
                placeholder={t('personalInfo.namePlacholder')}
                value={valName}
                onChange={onChangeValName}
                errorMessage={nameError}
            />
            <Input
                htmlFor={'lastname'}
                inputLabel={t('personalInfo.lastName')}
                type={'text'}
                id={'lastname'}
                placeholder={t('personalInfo.lastNamePlacholder')}
                value={valLastname}
                onChange={onChangeValLastname}
                errorMessage={lastnameError}
            />
            <Input
                htmlFor={'email'}
                inputLabel={t('personalInfo.email')}
                type={'email'}
                id={'email'}
                placeholder={t('personalInfo.emailPlacholder')}
                value={valEmail}
                onChange={onChangeValEmail}
                errorMessage={emailError}
            />
            <>
            <StyledErrorMessage>{phoneError}</StyledErrorMessage>
            <StyledSelectBox>
                <StyledLabel htmlFor='phone'>{t('personalInfo.phone')}</StyledLabel>
                <StyledPhoneInput
                    id={'phone'}
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="SK"
                    value={valPhone}
                    onChange={onChangeValPhone}
                    countries={["SK", "CZ", "HU", "KY"]}
                    />
            </StyledSelectBox>
            </>
        </StyledSubFormContainer>
    );
}

SubFormPersonalInfo.propTypes = {
    valName: PropTypes.string,
    valLastname: PropTypes.string,
    valEmail: PropTypes.string,
    valPhone: PropTypes.string,
    onChangeValName: PropTypes.func,
    onChangeValLastname: PropTypes.func,
    onChangeValEmail: PropTypes.func,
    onChangeValPhone: PropTypes.func,
    nameError: PropTypes.string,
    lastnameError: PropTypes.string,
    emailError: PropTypes.string,
    phoneError: PropTypes.string,
};

export default SubFormPersonalInfo;