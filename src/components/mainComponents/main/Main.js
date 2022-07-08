import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import {
    StyledFormContainer,
    StyledPictureContainer,
    StyledMainWrapper,
    StyledMainImg,
    StyledMainImgResponsiveTablet
} from "./style";
import {StyledContainer} from "../../../styles/styles";
import pictureDesktop from './../../../images/study_in_broad-for_dektop.svg';
import pictureTablet from './../../../images/study_in_broad-for_tablet.svg';
import Form from "./form/Form";

const Main = ({headerHeight}) => {

    const { t } = useTranslation();

    return ( 
        <StyledMainWrapper>
            <StyledContainer>
                <StyledFormContainer>
                    <Form headerHeight={headerHeight} />
                </StyledFormContainer>
                <StyledPictureContainer>
                        <StyledMainImg src={pictureDesktop} alt={t('imagesAlt.internshipStudy')} />
                        <StyledMainImgResponsiveTablet src={pictureTablet} alt={t('imagesAlt.internshipStudy')} />
                </StyledPictureContainer>
            </StyledContainer>
        </StyledMainWrapper>
    );
};

Main.propTypes = {
    setHeaderHeight: PropTypes.func,
};

export default Main;