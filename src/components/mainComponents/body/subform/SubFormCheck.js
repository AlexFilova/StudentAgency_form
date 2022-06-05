import { SubFormContainer, BlockWrapper } from './style';
import { SubFormTitleFont, TitleCheckSubFormFont, ParagraphCheckSubFormFont } from "../../../../styles/fontStyles";
import { useTranslation } from "react-i18next";

function SubFormCheck () {

    const { t } = useTranslation();

    return (
        <SubFormContainer>
             <SubFormTitleFont>{t('titles.titleSubformThird')}</SubFormTitleFont>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.internshipLocality')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>ahoj</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.coutry')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>ahoj</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.time')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>ahoj</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.fullName')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>ahoj</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.emailAddress')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>ahoj</ParagraphCheckSubFormFont>
            </BlockWrapper>
            <BlockWrapper>
                <TitleCheckSubFormFont>{t('checkInfo.phone')}</TitleCheckSubFormFont>
                <ParagraphCheckSubFormFont>ahoj</ParagraphCheckSubFormFont>
            </BlockWrapper>

        </SubFormContainer>
    );
}

export default SubFormCheck ;