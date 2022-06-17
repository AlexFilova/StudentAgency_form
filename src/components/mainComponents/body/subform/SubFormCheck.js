import { SubFormContainer, BlockWrapper } from './style';
import { SubFormTitleFont, TitleCheckSubFormFont, ParagraphCheckSubFormFont } from "../../../../styles/fontStyles";
import { useTranslation } from "react-i18next";

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
        <SubFormContainer>
             <SubFormTitleFont>{t('titles.titleSubformThird')}</SubFormTitleFont>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.internshipLocality')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valLocality}</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.coutry')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valCountry.value}{valState.value}</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.work')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valWork.value}</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.time')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valTime}</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.fullName')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valName} {valLastname}</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.emailAddress')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valEmail}</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.phone')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>{valPhone}</ParagraphCheckSubFormFont>
            </BlockWrapper>

        </SubFormContainer>
    );
}

export default SubFormCheck ;