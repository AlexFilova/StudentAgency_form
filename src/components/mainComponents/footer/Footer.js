import {useTranslation} from 'react-i18next';
import {StyledFooterSection, StyledFooterContainer, StyledFooterWrapper} from "./style";
import {FooterBox, FooterLinksBox} from '../../commonComponents/Box';
import {LogoFooter} from "../../commonComponents/Logo";


const Footer = () => {

    const { t } = useTranslation();

    return (
        <StyledFooterSection>
            <StyledFooterContainer>
                <StyledFooterWrapper>
                    <LogoFooter />
                    <FooterBox title={t('footer.aboutUsTitle')} boxContent={t('footer.aboutUsContent')} />
                    <FooterBox title={t('footer.supportTitle')} boxContent={t('footer.supportContent')} />
                    <FooterLinksBox title={t('footer.contactsTitle')} />
                </StyledFooterWrapper>
            </StyledFooterContainer> 
        </StyledFooterSection>
    );
}

export default Footer;