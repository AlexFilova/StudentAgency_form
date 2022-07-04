import {useTranslation} from 'react-i18next';
import {
    StyledFinalSubPage,
    StyledSideFinalDivBox,
    StyledSideTitle,
    StyledSideContent,
    StyledFinalImgDiv,
    StyledFinalImg,
} from './style';
import finalPicure from '../../../images/study_in_broad-for_phone.svg';

const FinalPage = () => {

    const { t } = useTranslation();
    
    return (
        <StyledFinalSubPage>
            <StyledSideFinalDivBox>
                <StyledSideTitle done>{t('finalPage.finalTitle')}</StyledSideTitle>
                <StyledSideContent>{t('finalPage.finalContent')}</StyledSideContent>
            </StyledSideFinalDivBox>
            <StyledFinalImgDiv>
                <StyledFinalImg src={finalPicure} alt={t('imagesAlt.oopsError')}/>
            </StyledFinalImgDiv>
        </StyledFinalSubPage>
     );
};

export default FinalPage;