import {useTranslation} from 'react-i18next';
import {StyledErrorSubPage, StyledErrorDivImg, StyledErrorDivText, StyledErrorTitle, StyledErrorcontent} from './style'
import oopsError from '../../../images/oops.svg';

const ApiError = () => {

    const { t } = useTranslation();
    
    return (
        <StyledErrorSubPage>
            <StyledErrorDivImg>
                <img src={oopsError} alt={t('imagesAlt.oopsError')}/>
            </StyledErrorDivImg>
            <StyledErrorDivText>
                <StyledErrorTitle>{t('errorMessages.noDataErrorTitle')}</StyledErrorTitle>
                <StyledErrorcontent>{t('errorMessages.noDataErrorContent')}</StyledErrorcontent>
            </StyledErrorDivText>

        </StyledErrorSubPage>


     );
}

ApiError.propTypes = {
};

export default ApiError;