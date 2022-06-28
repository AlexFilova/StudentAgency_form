import {useTranslation} from 'react-i18next';
import {
    StyledFinalSubPage,
    StyledSideDivBox,
    StyledSideTitle,
    StyledSideContent,
    StyledFinalDivImg,
    StyledFinalImg,
} from './style';
import finalPicure from '../../../images/study_in_broad-for_phone.svg';

const FinalPage = () => {

    const { t } = useTranslation();
    
    return (
        <StyledFinalSubPage>
            <StyledSideDivBox>
                <StyledSideTitle done>{t('finalPage.finalTitle')}</StyledSideTitle>
                <StyledSideContent>{t('finalPage.finalContent')}</StyledSideContent>
            </StyledSideDivBox>
            <StyledFinalDivImg>
                <StyledFinalImg src={finalPicure} alt={t('imagesAlt.oopsError')}/>
            </StyledFinalDivImg>
        </StyledFinalSubPage>
     );
};

export default FinalPage;