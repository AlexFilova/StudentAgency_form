import {useTranslation} from 'react-i18next';
import {
    StyledErrorSubPage,
    StyledErrorDivImg,
    StyledErrorImg,
    StyledSideErrorDivBox,
    StyledSideTitle,
    StyledSideContent,
} from './style';
import errorPicure from '../../../images/error.svg';

const GetApiError = () => {

    const { t } = useTranslation();
    
    return (
        <StyledErrorSubPage>
            <StyledErrorDivImg>
                <StyledErrorImg src={errorPicure} alt={t('imagesAlt.oopsError')} />
            </StyledErrorDivImg>
            <StyledSideErrorDivBox>
                <StyledSideTitle>{t('dataNotReceived.title')}</StyledSideTitle>
                <StyledSideContent>{t('dataNotReceived.content')}</StyledSideContent>
            </StyledSideErrorDivBox>
        </StyledErrorSubPage>
     );
};

export default GetApiError;