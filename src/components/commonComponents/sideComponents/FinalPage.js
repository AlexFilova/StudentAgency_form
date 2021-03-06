import {useTranslation} from 'react-i18next';
import {
    StyledSideContainer,
    StyledSideSubPage,
    StyledSideDivBox,
    StyledSideTitle,
    StyledSideContent,
    StyledSideImgDiv,
    StyledSideImg,
} from './style';
import finalPicture from '../../../images/study_in_broad-for_phone.svg';

const FinalPage = () => {

    const { t } = useTranslation();
    
    return (
        <StyledSideContainer>
            <StyledSideSubPage>
                <StyledSideDivBox>
                    <StyledSideTitle done>{t('finalPage.title')}</StyledSideTitle>
                    <StyledSideContent>{t('finalPage.content')}</StyledSideContent>
                </StyledSideDivBox>
                <StyledSideImgDiv>
                    <StyledSideImg src={finalPicture} alt={t('imagesAlt.oopsError')}/>
                </StyledSideImgDiv>
            </StyledSideSubPage>
        </StyledSideContainer>
     );
};

export default FinalPage;