import {useTranslation} from "react-i18next";
import {StyledFormContainer, StyledPictureContainer, StyledMainWrapper, StyledMainImg, StyledMainImgResponsiveTablet} from "./style";
import {StyledContainer, StyledSubContainer} from "../../../styles/styles";
import pictureDesktop from './../../../images/study_in_broad-for_dektop.svg';
import pictureTablet from './../../../images/study_in_broad-for_tablet.svg';
import Form from "./form/Form";

const Main = () => {

    const { t } = useTranslation();

    return ( 
        <StyledMainWrapper>
            <StyledContainer>
                <StyledSubContainer>
                    <StyledFormContainer>
                        <Form />
                    </StyledFormContainer>
                    <StyledPictureContainer>
                            <StyledMainImg src={pictureDesktop} alt={t('imagesAlt.internshipStudy')} />
                            <StyledMainImgResponsiveTablet src={pictureTablet} alt={t('imagesAlt.internshipStudy')} />
                    </StyledPictureContainer>
                </StyledSubContainer>
            </StyledContainer>
        </StyledMainWrapper>
    );
}

export default Main;