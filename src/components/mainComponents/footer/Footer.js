import { FooterSection, FooterContainer, FooterWrapper } from "./style";
import Box from '../../commonComponents/Box';
import LogoComponent from "../../commonComponents/Logo";
import { useTranslation } from 'react-i18next';


const Footer = () => {

    const { t } = useTranslation();

    return (
        <FooterSection>
            <FooterContainer>
                <FooterWrapper>
                    <LogoComponent />
                    <Box title={t('footer.aboutUs')} boxContent={t('footer.cupcakeIpsum')} />
                    <Box title={t('footer.support')} boxContent={t('footer.cupcakeIpsum')} />
                    <Box title={t('footer.contacts')} boxContent={t('footer.cupcakeIpsum')} />
                </FooterWrapper>
            </FooterContainer> 
        </FooterSection>
    );
}

export default Footer;