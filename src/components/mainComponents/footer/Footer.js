import {useTranslation} from 'react-i18next';
import {StyledFooterSection, StyledFooterContainer, StyledFooterWrapper} from "./style";
import {Box, LinksBox} from '../../commonComponents/Box';
import {LogoFooter} from "../../commonComponents/Logo";


const Footer = () => {

    const { t } = useTranslation();

    return (
        <StyledFooterSection>
            <StyledFooterContainer>
                <StyledFooterWrapper>
                    <LogoFooter />
                    <Box title={t('footer.aboutUsTitle')} boxContent={t('footer.aboutUsContent')} />
                    <Box title={t('footer.supportTitle')} boxContent={t('footer.supportContent')} />
                    <LinksBox title={t('footer.contactsTitle')} />
                </StyledFooterWrapper>
            </StyledFooterContainer> 
        </StyledFooterSection>
    );
}

export default Footer;