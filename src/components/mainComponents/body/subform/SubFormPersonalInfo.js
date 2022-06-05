import { SubFormTitleFont, SmallTitleFont } from "../../../../styles/fontStyles";
import { useTranslation } from "react-i18next";
import Input from "../../../commonComponents/selectAndInput/Input";

const SubFormPersonalInfo = () => {

    const { t } = useTranslation();

    return (
        <div>
            <SubFormTitleFont>{t('titles.titleSubformSecond')}</SubFormTitleFont>
            <SmallTitleFont>{t('personalInfo.aboutYou')}</SmallTitleFont>
            <Input
                htmlFor={'name'}
                inputLabel={t('personalInfo.name')}
                type={'text'}
                id={'name'}
                placeholder={t('personalInfo.namePlacholder')}
            />
            <Input
                htmlFor={'lastname'}
                inputLabel={t('personalInfo.lastName')}
                type={'text'}
                id={'lastname'}
                placeholder={t('personalInfo.lastNamePlacholder')}
            />
            <Input
                htmlFor={'email'}
                inputLabel={t('personalInfo.email')}
                type={'email'}
                id={'email'}
                placeholder={t('personalInfo.emailPlacholder')}
            />
            <Input
                htmlFor={'contact'}
                inputLabel={t('personalInfo.contact')}
                type={'number'}
                id={'contact'}
                placeholder={t('personalInfo.contactPlacholder')}
            />
        </div>
    );
}

export default SubFormPersonalInfo;