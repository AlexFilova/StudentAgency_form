import {FormContainer, SubContainerPicture, MainWrapper, MainImg} from "./style";
import {Container} from "../../../styles/styles";
import internshipStudy from './../../../images/study_in_abroad.svg';
import Form from "./form/Form";
import { useTranslation } from "react-i18next";

function Main () {

    const { t } = useTranslation();

    return ( 
        <MainWrapper>
            <Container>
                <FormContainer>
                    <Form />
                </FormContainer>
                <SubContainerPicture>
                        <MainImg src={internshipStudy} alt={t('imagesAlt.internshipStudy')} />
                </SubContainerPicture>
            </Container>
        </MainWrapper>
    );
}

export default Main;