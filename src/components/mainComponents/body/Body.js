import {FormContainer, PictureContainer, MainWrapper, MainImg} from "./style";
import {Container, SpecialContainer} from "../../../styles/styles";
import internshipStudy from './../../../images/study_in_abroad.svg';
import Form from "./form/Form";
import { useTranslation } from "react-i18next";

const Main = () => {

    const { t } = useTranslation();

    return ( 
        <MainWrapper>
            <Container>
                <SpecialContainer>
                    <FormContainer>
                        <Form />
                    </FormContainer>
                    <PictureContainer>
                            <MainImg src={internshipStudy} alt={t('imagesAlt.internshipStudy')} />
                    </PictureContainer>
                </SpecialContainer>
            </Container>
        </MainWrapper>
    );
}

export default Main;