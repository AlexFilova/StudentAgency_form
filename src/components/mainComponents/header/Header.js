import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
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

const Header = ({setHeaderHeight}) => {
    const headerRef = useRef(null)

    const {i18n} = useTranslation();
    const resolved =  i18n.resolvedLanguage;

    const lngs = {
        sk: {nativeName: 'Sk'},
        en: {nativeName: 'En'}
      };

    useEffect(() => {
       setHeaderHeight(updateHeaderHeight)
       // eslint-disable-next-line
    }, [])

    useEffect(() => {
        window.addEventListener('resize', updateHeaderHeight)
        // eslint-disable-next-line
    }, [])

    const updateHeaderHeight = () => {
        setHeaderHeight(headerRef.current.clientHeight)
    }

    return (
            <StyledHeaderSection ref={headerRef}>
                <StyledContainerHeader >
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
};

Header.propTypes = {
    setHeaderHeight: PropTypes.func,
};

export default Header;