import {useTranslation} from 'react-i18next';
import { 
    StyledHeaderSection,
    StyledContainerHeader,
    StyledSocialLanguageElement,
    StyledIconsDiv,
    StyledTranslatorDiv,
    StyledIcon,
    StyledLink,
    StyledSocialIconFb,
    StyledSocialIconInsagram,
    StyledButtonLang,
} from "./style";
import {LogoHeader} from "../../commonComponents/Logo";

const Header = () => {

    const lngs = {
        sk: {nativeName: 'Sk'},
        en: {nativeName: 'En'}
      };

    const {i18n} = useTranslation();
    const resolved =  i18n.resolvedLanguage;

    return (
            <StyledHeaderSection>
                <StyledContainerHeader>
                    <LogoHeader />
                    <StyledSocialLanguageElement>
                        <StyledIconsDiv>
                            <StyledIcon>
                                <StyledLink href="https://www.facebook.com" target='_blank'>
                                    <StyledSocialIconFb />
                                </StyledLink>
                            </StyledIcon>
                            <StyledIcon>
                                <StyledLink href="https://www.instagram.com" target='_blank'>
                                    <StyledSocialIconInsagram />
                                </StyledLink> 
                            </StyledIcon>
                        </StyledIconsDiv>
                        <StyledTranslatorDiv>
                            {Object.keys(lngs).map((lng) => (
                                <StyledButtonLang 
                                    key={lng}
                                    resolvedStyle={resolved === lng && 'resolvedStyle'}
                                    type="button"
                                    onClick={() => i18n.changeLanguage(lng)}
                                >
                                    {lngs[lng].nativeName}
                                </StyledButtonLang>
                            ))}
                        </StyledTranslatorDiv>
                        
                    </StyledSocialLanguageElement>
                </StyledContainerHeader>
            </StyledHeaderSection>   
    );
}

export default Header;