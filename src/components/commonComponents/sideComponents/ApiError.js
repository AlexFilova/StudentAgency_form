import {useTranslation} from 'react-i18next';
import {
    StyledErrorSubPage,
    StyledErrorDivImg,
    StyledErrorImg,
    StyledSideDivBox,
    StyledSideTitle,
    StyledSideContent,
} from './style';
import errorPicure from '../../../images/error.svg';

const ApiError = () => {

    const { t } = useTranslation();
    
    return (
        <StyledErrorSubPage>
            <StyledErrorDivImg>
                <StyledErrorImg src={errorPicure} alt={t('imagesAlt.oopsError')} />
            </StyledErrorDivImg>
            <StyledSideDivBox>
                <StyledSideTitle>{t('errorMessages.noDataErrorTitle')}</StyledSideTitle>
                <StyledSideContent>{t('errorMessages.noDataErrorContent')}</StyledSideContent>
            </StyledSideDivBox>

        </StyledErrorSubPage>
     );
};

export default ApiError;