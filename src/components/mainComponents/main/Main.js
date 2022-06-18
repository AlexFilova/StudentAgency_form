import {useTranslation} from "react-i18next";
import {StyledFormContainer, StyledPictureContainer, StyledMainWrapper, StyledMainImg} from "./style";
import {StyledContainer, StyledSubContainer} from "../../../styles/styles";
import internshipStudy from './../../../images/study_in_abroad.svg';
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
                            <StyledMainImg src={internshipStudy} alt={t('imagesAlt.internshipStudy')} />
                    </StyledPictureContainer>
                </StyledSubContainer>
            </StyledContainer>
        </StyledMainWrapper>
    );
}

export default Main;