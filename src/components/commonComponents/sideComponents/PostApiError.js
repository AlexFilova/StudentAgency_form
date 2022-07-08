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
import errorPicture from '../../../images/error.svg';

const PostApiError = () => {
    const { t } = useTranslation();
    
    return (
        <StyledSideContainer>
            <StyledSideSubPage>
                <StyledSideDivBox>
                    <StyledSideTitle done>{t('dataNotSent.title')}</StyledSideTitle>
                    <StyledSideContent>{t('dataNotSent.content')}</StyledSideContent>
                </StyledSideDivBox>
                <StyledSideImgDiv>
                    <StyledSideImg src={errorPicture} alt={t('imagesAlt.oopsError')}/>
                </StyledSideImgDiv>
            </StyledSideSubPage>
        </StyledSideContainer>
     );
};
 
export default PostApiError;