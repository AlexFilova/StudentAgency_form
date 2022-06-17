import { SubFormTitleFont, SmallTitleFont } from "../../../../styles/fontStyles";
import { SubFormContainer } from './style';
import { SelectBox, StyledErrorMessage, StyledLabel, StyledPhoneInput } from "../../../commonComponents/selectAndInput/style";
import { useTranslation } from "react-i18next";
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
        <SubFormContainer>
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
            <SelectBox>
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
            </SelectBox>
            </>
            {/* <StyledNextButton
            onClick={goToNext()}
            
            >{t('buttons.next')}</StyledNextButton> */}
        </SubFormContainer>
    );
}

export default SubFormPersonalInfo;