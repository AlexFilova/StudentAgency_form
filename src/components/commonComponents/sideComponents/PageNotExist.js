import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {
    StyledSideContainer,
    StyledSideSubPage,
    StyledSideDivBox,
    StyledSideTitle,
    StyledSideContent,
    StyledSideImgDiv,
    StyledSideImg,
    StyledNoPageButtonPart,
    StyledNoPageButton,
    StyledNoPageParagraph,
} from './style';
import noPagePicture from '../../../images/error_no_page.svg';

const PageNotExist = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    
    return (
        <StyledSideContainer noPage>
            <StyledSideSubPage noPage>
                <StyledSideImgDiv noPage>
                    <StyledSideImg src={noPagePicture} alt={t('imagesAlt.oopsError')}/>
                </StyledSideImgDiv>
                <StyledSideDivBox noPage>
                    <StyledSideTitle noPage>{t('pageNotFound.title')}</StyledSideTitle>
                    <StyledSideContent noPage>{t('pageNotFound.content')}</StyledSideContent>
                    <StyledNoPageButtonPart>
                        <StyledNoPageButton onClick={() => {navigate('/')}}>{t('pageNotFound.button')}</StyledNoPageButton>
                        <StyledNoPageParagraph>{t('pageNotFound.sideText')}</StyledNoPageParagraph>
                    </StyledNoPageButtonPart>
                </StyledSideDivBox>
            </StyledSideSubPage>
        </StyledSideContainer>
     );
};
 
export default PageNotExist;